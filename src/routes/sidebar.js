import {
  FiGrid,
  FiShoppingBag,
  FiUsers,
  FiUser,
  FiCompass,
  FiList,
  FiSlack,
  FiPackage
} from "react-icons/fi";
import { TbPackages } from "react-icons/tb";
import { RiCoupon3Line } from "react-icons/ri";

const sidebar = [
  {
    path: "/dashboard", // the url
    icon: FiGrid, // icon
    name: "Dashboard", // name that appear in Sidebar
  },
  {
    path: "/products",
    icon: FiShoppingBag,
    name: "Products",
  },
  {
    path: '/packages',
    icon: FiPackage,
    name: 'Packages'
  },
  {
    path: '/livepackages',
    icon: TbPackages,
    name: 'Live Packages'
  },
  {
    path: "/coupons",
    icon: RiCoupon3Line,
    name: 'Coupons'
  },
  {
    path: "/channels",
    icon: FiList,
    name: "Channels",
  },
  {
    path: "/rooms",
    icon: FiList,
    name: "TokShows",
  },
  {
    path: "/users",
    icon: FiUsers,
    name: "Users",
  },
  {
    path: "/orders",
    icon: FiCompass,
    name: "Orders",
  },
  {
    path: "/admins",
    icon: FiUser,
    name: "Admins",
  },
  {
    icon: FiSlack,
    name: "Setting",
    routes: [
      // submenu
      {
        path: "/settings",
        name: "Settings",
      },
    ],
  },
];

export default sidebar;
