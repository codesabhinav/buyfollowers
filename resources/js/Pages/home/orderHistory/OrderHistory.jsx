import { paginate } from "@/Pages/helper/paginationHelper";
import Pagination from "@/Pages/utils/Pagination";
import { useState, useEffect } from "react";
import { fetchOrderHistory, fetchOrderStatusData } from "../../../Helper/api.js";

const OrderHistory = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [orderHistory, setOrderHistory] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [orderStatuses, setOrderStatuses] = useState({});

    useEffect(() => {
        const getOrderHistory = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchOrderHistory(currentPage);
                setOrderHistory(data.data);
                setTotalPages(data.last_page);
            } catch (err) {
                setError("No orders found.");
            } finally {
                setLoading(false);
            }
        };
        getOrderHistory();
    }, [currentPage]);

    const fetchOrderStatus = async (orderId) => {
        try {
            const response = await fetchOrderStatusData(orderId);
            if (response.status) {
                setOrderStatuses(prevState => ({
                    ...prevState,
                    [orderId]: response.status,
                }));
            }
        } catch (error) {
            setOrderStatuses(prevState => ({
                ...prevState,
                [orderId]: "Error",
            }));
        }
    };

    useEffect(() => {
        orderHistory.forEach(item => {
            fetchOrderStatus(item.order_id);
        });
    }, [orderHistory]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const getStatusColor = (status) => {
        if (status === "Canceled") {
            return "bg-red-500 text-white";
        } else if (status === "In progress") {
            return "bg-blue-500 text-white";
        } else {
            return "bg-green-500 text-white";
        }
    };

    return (
        <>
            <div className="w-full flex flex-col items-center gap-8 mb-8">
                {loading ? (
                    <div className="flex justify-center items-center py-4">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
                    </div>) : error ? (
                        <div className="text-center text-red-500">{error}</div>
                    ) : orderHistory.length == 0 ? (
                        <div className="text-center">No orders found.</div>
                    ) : (
                    orderHistory.map((item, index) => (
                        <div
                            key={index}
                            className="w-full p-4 shadow-xl shadow-pink-200/20 rounded-lg border border-gray-400/20 flex flex-col gap-4"
                        >
                            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6">
                                <div className="flex flex-wrap items-center gap-6">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-base font-semibold">
                                            Order Number:
                                        </span>
                                        <span className="text-sm">
                                            #{item.order_id}
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-base font-semibold">
                                            Order Date:
                                        </span>
                                        <span className="text-sm">
                                            {item.created_at}
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-base font-semibold">
                                            Total Amount:
                                        </span>
                                        <span className="text-sm">
                                            ${item.amount}
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-base font-semibold">
                                            Order Status:
                                        </span>
                                        <button className={`p-1 rounded-lg text-white text-[12px] font-semibold hidden lg:flex items-center justify-center ${getStatusColor(orderStatuses[item.order_id])}`}
                                        >
                                            {orderStatuses[item.order_id] || "Loading..."}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <hr className="w-full border-1 border-gray-400" />
                            <div className="w-full flex flex-col items-center gap-8">
                                <div
                                    className="w-full flex flex-col lg:flex-row items-center gap-4"
                                >
                                    <div className="w-[123px]">
                                        <img
                                            src={item.product.media_id.path}
                                            alt="orderHistory-1"
                                            className="mix-blend-multiply w-full h-full rounded-full"
                                        />
                                    </div>
                                    <div className="w-full flex flex-col gap-2 lg:gap-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-semibold">
                                                {item.product.name}
                                            </span>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                                            <div className="flex items-center gap-2">
                                                <span className="flex items-center gap-1 font-semibold">
                                                    Quantity:
                                                    <span>{item.quantity}</span>
                                                </span>

                                                <span className="flex items-center gap-1 font-semibold">
                                                    |
                                                </span>

                                                <span className="flex items-center gap-1 font-semibold">
                                                    Rate:
                                                    <span>
                                                        ${item.amount}
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1 text-pink-500 max-[369px]:text-xs">
                                                <a
                                                    href={`add-cart/${item.product.id}`}
                                                    className="bg-[#D52E9C] hover:bg-[#f23bb5] p-2 rounded-lg text-white text-[14px] font-semibold hidden lg:flex"
                                                >
                                                    View Product
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}

                {!loading && !error && orderHistory.length > 0 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                )}
            </div>
        </>
    );
};

export default OrderHistory;
