import tw from "tailwind-styled-components";

export const BackgrounOverLay = tw.div`
absolute 
w-full 
h-full 
top-0 
left-0
 bg-gray-900/40
`;

export const HeroStyled = tw.div`
  absolute 
  w-full
   h-full 
   left-0 
   top-0 
   flex 
   flex-col 
   justify-center 
   text-center
    text-slate-100
`;
export const FormWrapper = tw.form`
container 
mx-auto 
grid grid-rows-4
gap-2 
lg:grid-rows-1 
lg:gap-0 grid-flow-col 
px-3 
my-4
`;
export const FormInputStyle = tw.div`
text-start
 bg-slate-200 
col-auto 
h-14 flex 
justify-between 
px-2 text-gray-800 
cursor-pointer
border-r
rounded-sm
 border-gray-600 font-medium
`;

export const SearchButton = tw.button`
 bg-primaryColor 
 lg:max-w-[200px] 
 text-center 
 rounded-md lg:rounded-none 
 lg:rounded-r-md
`;
// "text-start bg-slate-200 col-auto h-14 flex justify-between px-2 text-gray-700 cursor-pointer border rounded-sm border-gray-600 font-semibold
