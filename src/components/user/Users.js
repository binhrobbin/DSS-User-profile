import UserService from "../../services/UserService";
import {useEffect, useState} from "react";
import "../../assets/css/Users.css"
import {Link, useNavigate} from "react-router-dom";

function Users() {
    const [users, setUsers] = useState([]);
    const [numberPaging, setNumberPaging] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const navigation = useNavigate();

    useEffect(() => {
       getAll().then().catch()
    }, [page, pageSize]);
    const getAll = async () => {
        try {
            const userList = await UserService.getAll(pageSize, page);
        userList.results.sort((a, b) => {
            if (a.login.username < b.login.username) return -1;
            if (a.login.username > b.login.username) return 1;
            if (a.name.last < b.name.last) return -1;
            if (a.name.last > b.name.last) return 1;
            return 0;
        });
        if (page <=3) setNumberPaging([1,2,3,4,5])
        else if (page >=8) setNumberPaging([6,7,8,9,10])
        else {
            let arr = [];
            for (let i = page-2; i <= page+2; i++) {
                arr.push(i);
                setNumberPaging(arr);
            }
        }
        setUsers(userList.results);
        }catch (error){
            console.error("Error loading posts:", error);
            navigation(`/access-denined`);
        }
    }
    const changePageSize = (event) => {
        setPageSize(event.target.value);
        setPage(1);
    };
    return (
        <>
            <div className="relative shadow-md sm:rounded-lg">
                <div
                    className="z-50 flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
                    <div className="z-50">
                        <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction"
                                className="z-50 inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                type="button">
                            <span className="sr-only">Action button</span>
                            Action
                            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>
                        {/*Dropdown menu*/}
                        <div id="dropdownAction"
                             className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 z-50"
                                aria-labelledby="dropdownActionButton">
                                {/*<li className="z-50">*/}
                                {/*    <a href="#"*/}
                                {/*       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>*/}
                                {/*</li>*/}
                                <li>
                                    {/*<a href="#"*/}
                                    {/*   className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>*/}
                                </li>
                                <li>
                                    {/*<a href="#"*/}
                                    {/*   className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate*/}
                                    {/*    account</a>*/}
                                </li>
                            </ul>
                            <div className="py-1">
                                {/*<a href="#"*/}
                                {/*   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete*/}
                                {/*    User</a>*/}
                            </div>
                        </div>
                    </div>
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative">
                        <div
                            className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="text" id="table-search-users"
                               className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Search for users"/>
                    </div>
                </div>
                <div className="table-post">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox"
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Full Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Username
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gender
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user, index) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                key={index}>
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox"
                                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row"
                                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src={user.picture.large}
                                         alt="..."/>
                                    <div className="ps-3">
                                        <div
                                            className="text-base font-semibold">{user.name.title + " " + user.name.first + " " + user.name.last}</div>
                                        <div className="font-normal text-gray-500">{user.email}</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    {user.login.username}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        {/*<div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>*/}
                                        {user.gender}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        {/*<div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>*/}
                                        {user.phone}
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <br></br>
            <div className="grid grid-cols-4 w-full ">
                <div className=" p-4"></div>
                <div className=" p-4"></div>
                <div className=" p-4 content" style={{ whiteSpace: "nowrap" }}>
                    Number of records:&nbsp;&nbsp;
                    <select
                        className="my-select border-0 "
                        value={pageSize}
                        onChange={changePageSize}
                    >
                        <option value="10" className="border-0 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">10</option>
                        <option value="20" >20</option>
                        <option value="50">50</option>
                    </select>
                </div>
                <div className=" p-4 pagination">
                    <nav aria-label="Page navigation example">
                        <ul className="flex items-center -space-x-px h-10 text-base">
                            <li>
                                <Link to={"/users"} onClick={()=> {
                                    if (page>1) setPage(page -1)
                                }}
                                   className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span className="sr-only">Previous</span>
                                    <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M5 1 1 5l4 4"/>
                                    </svg>
                                </Link>
                            </li>
                            {numberPaging.map((number, index) => (
                            <li>
                                {(page !== number) ?
                                    <Link to={"/users"} onClick={()=> setPage(number)}
                                          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                        {number}</Link>
                                    :
                                    <Link to={"/users"} aria-current="page"
                                          className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
                                        {number}</Link>
                                }
                            </li>
                            ))}
                            <li>
                                <Link to={"/users"} onClick={()=> {
                                    if (page < 10) setPage(page +1)
                                }}
                                   className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span className="sr-only">Next</span>
                                    <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="m1 9 4-4-4-4"/>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/*<br></br>*/}
        </>
    )
}

export default Users;