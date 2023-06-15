"use client";

import { Image } from "next/image";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import db from "../firebaseConfig";
import moment from "moment";

export default function Home() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [checkIns, setCheckIns] = useState([]);
  const [checkDetails, setCheckDetails] = useState();
  const [drawarVisibility, setDrawarVisibility] = useState(false);
  const fetchCheckIns = async () => {
    const checkInRef = db.collection("checkIns");
    const snapshot = await checkInRef.get();

    const checkInList = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setCheckIns(checkInList);
  };

  useEffect(() => {
    fetchCheckIns();
  }, []);
  setTimeout(() => {
    console.log(checkIns);
  }, 1000);
  const sendData = async () => {
    if (title && imageUrl) {
      const checkinRef = db.collection("checkIns");

      await checkinRef.add({
        title: title,
        image_url: imageUrl,
        owner: "Hassan",
        created_at: new Date().toISOString(),
      });

      setTitle("");
      setImageUrl("");
      fetchCheckIns();
    }
  };
  const handleCheck = (id) => {
    const check = checkIns.filter((checkIn) => id === checkIn.id);
    setCheckDetails(check);
    setDrawarVisibility(true);
  };
  return (
    <>
      <Navbar />
      <main className="max-w-screen-xl mx-auto">
        <div className="flex py-2 mt-10">
          <div className=" flex-auto w-70 p-2">
            <h1 className="text-3xl my-1 font-semibold">CheckIns</h1>
            <p>Lorem ipsus dolor sit amen, something important say here</p>
          </div>
          <div className=" flex-auto text-right py-2 w-30 my-3">
            {/* <!-- Modal toggle --> */}
            <button
              // data-modal-target="#Modal"
              // data-modal-toggle="defaultModal"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              type="button"
              className="bg-dark text-white p-2"
            >
              Add check in
            </button>
          </div>
        </div>
      </main>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                New Checkin
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Check in Title"
                  className="mb-3 bg-gray-50 text-gray-900 text-sm focus:outline-none  w-full p-2.5  dark:placeholder-gray-400"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Img Url"
                  className="bg-gray-50 text-gray-900 text-sm focus:outline-none block w-full p-2.5  dark:placeholder-gray-400"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="text-dark bg-white hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="text-white bg-black hover:bg-gray-800 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-black"
                onClick={sendData}
              >
                Create Checkin
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" max-w-screen-xl mx-auto mt-10 bg-gray-100 py-5 px-1">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-center table-fixed">
            <thead className="text-xs text-dark-200 uppercase">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Owner
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Created at
                </th>
              </tr>
            </thead>
            <tbody>
              {checkIns.length > 0 &&
                checkIns.map((checkIn) => (
                  <tr
                    className=" dark:text-gray-600 bg-white"
                    onClick={() => handleCheck(checkIn.id)}
                    key={checkIn.id}
                  >
                    <td scope="row" className="px-6 py-4">
                      {checkIn.title}
                    </td>
                    <td className="px-6 py-4">{checkIn.owner}</td>
                    <td className="px-6 py-4">
                      <span className="bg-teal-300 px-1 py-1">CHECKED IN</span>
                    </td>
                    <td className="px-6 py-4">
                      {moment(checkIn.created_at).format("DD-MMM-YYYY")}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {drawarVisibility && (
        <div
          id="drawer-right-example"
          className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800"
          tabIndex="-1"
          aria-labelledby="drawer-right-label"
        >
          <h5
            id="drawer-right-label"
            className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
          >
            Details
          </h5>
          <button
            type="button"
            onClick={() => setDrawarVisibility(false)}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <hr />
          <h1 className="mb-3 mt-3 text-base font-bold">
            {checkDetails[0].title}
          </h1>
          <img
            className="rounded-t-lg"
            src={checkDetails[0].image_url}
            alt="Demo"
          />
        </div>
      )}
    </>
  );
}
