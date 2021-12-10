import { useAppSelector } from "@hooks/redux";
import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Item from "./components/Item";
import useHover from "@hooks/useHover";
import { IDropdown } from "@redux/types/ui";
import Link from "@designs/Link";

const HoverDropdownContainer = styled.div`
  ${tw`absolute right-0`}
`;
const HoverDropdownBox = styled.div`
  ${tw`bg-white shadow-lg  w-[380px] px-8 py-4`}
`;
const ViewWishlistTop = styled.div`
  ${tw`flex justify-between items-center mb-4`}
`;
const ViewWishlist = styled.span`
  ${tw`text-base pb-1 border-b border-b-green-500`}
`;
const Count = styled.span`
  ${tw`text-sm`}
`;
const HoverDropdownMain = styled.div`
  ${tw`h-[200px] w-full overflow-y-scroll flex flex-col`}

  /* width */
  ::-webkit-scrollbar {
    width: 2px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    ${tw`bg-green-400`}
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    ${tw`bg-green-500`}
  }
`;

interface IHoverDropdown {
  title: string;
  data: IDropdown;
}

const HoverDropdown: FC<IHoverDropdown> = ({ title, data }) => {
  return (
    <HoverDropdownContainer>
      <HoverDropdownBox>
        <ViewWishlistTop>
          <Count>
            You have {data?.length || 0} items in your {title}
          </Count>
          <Link href={title === "Wishlist" ? "/wishlist" : "/checkout/cart"}>
            <ViewWishlist>View {title}</ViewWishlist>
          </Link>
        </ViewWishlistTop>

        <HoverDropdownMain>
          {data &&
            data.map((value: IDropdown) => (
              <Item key={value.id} data={value} />
            ))}
        </HoverDropdownMain>
      </HoverDropdownBox>
    </HoverDropdownContainer>
  );
};

export default HoverDropdown;
