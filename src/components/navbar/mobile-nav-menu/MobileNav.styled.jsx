import tw from "tailwind-styled-components";
// import styled from "styled-components";

export const MobileMenuDropDown = tw.div`
absolute 
left-[-100%]
top-0 
bg-gray-100/90
w-10/12
md:w-6/12 
lg:hidden
px-4
py-5 
flex 
flex-col
ease-in duration-300
z-30
`;

export const Button = tw.button`
p-3
bg-primaryColor
rounded-md
`;
