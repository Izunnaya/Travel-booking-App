import tw from "tailwind-styled-components";
// import styled from "styled-components";

export const MobileMenuDropDown = tw.div`
bg-gray-100/90
w-10/12
md:w-6/12
lg:hidden 
px-4
py-2 
flex 
flex-col
ease-in duration-300
z-30
left-0-[-100%]
absolute
top-0
`;

export const Button = tw.button`
p-3
bg-primaryColor
rounded-md
`;
