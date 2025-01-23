import { paginate } from "@/Pages/helper/paginationHelper";
import Pagination from "@/Pages/utils/Pagination";
import { useState } from "react";

const orderHistory = [
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
    {
        orderNo: "#0012547",
        orderDt: "2025-12-22",
        totalAmount: "176.00",
        orderStatus: "Processed",
        orderDetails: [
            {
                img: "/assets/orderHistory/orderHistory-1.jpg",
                title: "Travilling Bag",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia perspiciatis adipisci fugit repellat nam ea recusandae exercitationem accusamus labore.",
                size: "67 inc",
                colors: "red",
                quantity: "1",
                itemPrice: "80.00",
            },
        ],
    },
];

const OrderHistory = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const { paginatedData, totalPages } = paginate(
        orderHistory,
        currentPage,
        itemsPerPage
    );

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className="w-full flex flex-col items-center gap-8 mb-8">
                {paginatedData.map((item, index) => (
                    <div
                        key={index}
                        className="w-full p-4 shadow-md rounded-lg border border-gray-400/20 flex flex-col gap-4"
                    >
                        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6">
                            <div className="flex flex-wrap items-center gap-6">
                                <div className="flex flex-col gap-2">
                                    <span className="text-base font-semibold">
                                        Order Number:
                                    </span>
                                    <span className="text-sm">
                                        {item.orderNo}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-base font-semibold">
                                        Order Date:
                                    </span>
                                    <span className="text-sm">
                                        {item.orderDt}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-base font-semibold">
                                        Total Amount:
                                    </span>
                                    <span className="text-sm">
                                        ${item.totalAmount}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-base font-semibold">
                                        Order Status:
                                    </span>
                                    <span className="text-sm">
                                        {item.orderStatus}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr className="w-full border-1 border-gray-400" />
                        <div className="w-full flex flex-col items-center gap-8">
                            {item.orderDetails.map((subItem, subIndex) => (
                                <div
                                    key={subIndex}
                                    className="w-full flex flex-col lg:flex-row items-center gap-4"
                                >
                                    <div className="w-[123px]">
                                        <img
                                            src={subItem.img}
                                            alt="orderHistory-1"
                                            className="mix-blend-multiply w-full h-full rounded-xl"
                                        />
                                    </div>
                                    <div className="w-full flex flex-col gap-2 lg:gap-8">
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-semibold">
                                                {subItem.title}
                                            </span>
                                            <span className="font-semibold">
                                                ${subItem.itemPrice}
                                            </span>
                                        </div>
                                        {/* <span className="text-sm">
                                                {subItem.description}
                                            </span> */}

                                        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                                            <div className="flex items-center gap-2">
                                                <span className="flex items-center gap-1 font-semibold">
                                                    Quantity:
                                                    <span>{subItem.size}</span>
                                                </span>

                                                <span className="flex items-center gap-1 font-semibold">
                                                    |
                                                </span>

                                                <span className="flex items-center gap-1 font-semibold">
                                                    Rate:
                                                    <span>
                                                        ${subItem.quantity}
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1 text-pink-500 max-[369px]:text-xs">
                                                <a href="#">View Products</a>
                                                <span>|</span>
                                                <a href="#">
                                                    Buy again Products
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Pagination */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </>
    );
};

export default OrderHistory;
