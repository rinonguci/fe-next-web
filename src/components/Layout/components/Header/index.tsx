import { useAppSelector } from "@hooks/redux";
import { INavItem } from "@interfaces/UI/INavItem";
import {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import tw from "twin.macro";
import HeaderTop from "./components/HeaderTop";
import Nav from "./components/Nav";
import NavMobile from "./components/NavMobile";
import useToggleAndCloseVer2 from "@hooks/useToggleAndCloseVer2";
import { useRouter } from "next/router";
const HeaderContainer = styled.div<{ isScroll: boolean }>`
  ${tw`fixed top-0 right-0 left-0 z-50 bg-white`}
  transition: transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: ${({ isScroll }) =>
    isScroll ? "translateY(-100px)" : "translateY(0)"};
`;

const HeaderBox = styled.header`
  ${tw`h-[145.5px] relative`}
`;
const HeaderTopContainer = styled.div`
  ${tw`relative`};
`;

const NavContainer = styled.div`
  ${tw`relative container mx-auto pt-12 pb-5`};
`;

const SearchBox = styled.div`
  ${tw`bg-white absolute w-full h-full top-[20%] z-[9999]`}
`;
const InputBox = styled.div`
  ${tw`h-[40px] max-w-[600px] mx-auto sm:mx-10 pb-4 flex items-center border-b border-b-black-lv1`}
`;
const Close = styled.div`
  ${tw`relative cursor-pointer`}

  &:before {
    content: "";
    position: absolute;
    height: 3px;
    width: 20px;
    border-radius: 20px;
    background-color: black;
    transform: rotate(45deg);
  }

  &:after {
    content: "";
    position: absolute;
    height: 3px;
    width: 20px;
    border-radius: 20px;
    background-color: black;
    transform: rotate(-45deg);
  }
`;
const Input = styled.input`
  ${tw`w-[94%] h-full mx-2 font-semibold text-lg`}
`;

interface IHeader {}

const Header: FC<IHeader> = () => {
  const router = useRouter();
  const { categories } = useAppSelector((state) => state.commonReducers);
  const [isScroll, setIsScroll] = useState<boolean>(false);
  let lastScrollTop = useRef<number>(0);

  const handleScroll = useCallback((e) => {
    let st = document.body.getBoundingClientRect().top;

    if (
      st > lastScrollTop.current &&
      document.documentElement.scrollTop > -30
    ) {
      setIsScroll(false);
    } else {
      if (document.documentElement.scrollTop > 200) {
        setIsScroll(true);
      }
    }
    lastScrollTop.current = st;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, []);

  //Handle Click Search
  const ref = useRef<HTMLDivElement>(null);
  const [isSearch, setIsSearch] = useToggleAndCloseVer2(ref);
  const [value, setValue] = useState<string>("");

  const handleClickSearch = () => {
    setIsSearch(!isSearch);
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      e.preventDefault();

      router.push({
        href: "search",
        query: {
          key: value,
        },
      });
    }
  };

  return (
    <HeaderContainer isScroll={isScroll}>
      <HeaderBox>
        <HeaderTopContainer>
          <HeaderTop handleClickSearch={handleClickSearch} />
        </HeaderTopContainer>

        <NavContainer>
          {isSearch && (
            <SearchBox ref={ref}>
              <InputBox>
                <Input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onKeyDown={(e) => handleSearch(e)}
                  placeholder="Search"
                />
                <Close onClick={handleClickSearch} />
              </InputBox>
            </SearchBox>
          )}
          {categories && <Nav list={categories} mediaQuery="md" />}
          <NavMobile list={listNavMobile} mediaQuery="md" />
        </NavContainer>
      </HeaderBox>
    </HeaderContainer>
  );
};

export default Header;

const listNavMobile: Array<INavItem> = [
  {
    link: "/new-in",
    name: "What's New",
  },
  {
    link: "/designer",
    name: "Designers",
  },
  {
    link: "/lifestyle",
    name: "Lifestyle",
  },
];
