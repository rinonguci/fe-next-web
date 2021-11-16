import Link from "@designs/Link";
import { ICategory } from "@interfaces/redux";

import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import NavImage from "./components/NavImage";

const CategoryContainer = styled.div`
  ${tw`w-full`}
`;
const CategoryBox = styled.div`
  ${tw`container mx-auto grid grid-cols-4 xl:px-4 px-40 `}
`;
const NavDetailContainer = styled.div`
  ${tw`absolute top-[100%] left-0 right-0`}

  height: 400px;
  overflow: hidden;
  background: linear-gradient(180deg, #f6f6f6 0, #fff 4em, #fff);
`;
const NavTitle = styled.p`
  ${tw`text-xl font-medium mb-8`}
`;
const NavList = styled.a`
  ${tw`block align-top whitespace-normal`}
`;
const CategoryLeve2 = styled.div`
  ${tw`not-last:pt-20 before:bg-gray-300 relative`}

  &:not(:last-child):before {
    content: "";
    position: absolute;
    height: 300px;
    width: 1px;
    left: -2.5rem;
  }
`;
const CategoryLeve3 = styled.a`
  ${tw`block break-words line-height[1.1] text-xl`}
`;

interface INavDetail {
  data?: Array<ICategory>;
}

type ILength = {
  id: string;
  len: number;
  start: number;
  end: number;
  span: string;
};

interface IDataUI {
  category1: number;
  category2: Array<ILength>;
}

const LENGTH_CATEGORY = 14;

const NavDetail: FC<INavDetail> = ({ data }) => {
  const [lengthCategoryLevel1, setLengthCategoryLevel1] = useState<any>();
  const [lengthCategoryLevel2, setLengthCategoryLevel2] =
    useState<Array<ILength>>();

  const [column, setColumn] = useState<number>(0);

  useEffect(() => {
    let result = handleDataUI();

    if (!result) return;

    setLengthCategoryLevel1(result.category1);
    setLengthCategoryLevel2(result.category2);
    setColumn(
      result.category2.reduce(
        (result: number, value: ILength) => result + value.len + 1,
        0
      ) + 2
    );
  }, []);

  const divide = (divisor: number, divider: number) => {
    return (divisor - (divisor % divider)) / divider;
  };

  const handleDataUI = (): IDataUI | undefined => {
    if (!data) return undefined;

    let category1 = data.length;
    let category2 = data.reduce((result: any, value: ICategory) => {
      let length = (value && value.children && value.children.length) || 0;
      let div = divide(length, LENGTH_CATEGORY);
      let residuals = length - div * LENGTH_CATEGORY;
      let isLessThan = residuals < LENGTH_CATEGORY && residuals !== 0 ? 1 : 0;

      return [
        ...result,
        {
          id: value._id,
          len: div === 0 ? isLessThan : div + isLessThan,
        },
      ];
    }, []);

    category2 = category2.reduce(
      (result: Array<ILength>, value: { id: string; len: number }) => {
        if (result.length === 0) {
          return [
            {
              ...value,
              start: 1,
              end: value.len + 2,
              span: `1 / ${value.len + 2}`,
            },
          ];
        }

        if (result && result.at(result.length - 1)) {
          let start = result.at(result.length - 1)?.end || 0;
          let end = start + value.len + 1;
          return [
            ...result,
            {
              ...value,
              start: start,
              end: end,
              span: `${start} / ${end}`,
            },
          ];
        }
      },
      []
    );

    return {
      category1: category1,
      category2: category2,
    };
  };

  const handleChunkArray = (
    inputArray: Array<any> | undefined,
    perChunk: number
  ) => {
    var result =
      inputArray &&
      inputArray.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / perChunk);

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [];
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
      }, []);
    return result;
  };

  const handleColumn = (id: string) => {
    let item = lengthCategoryLevel2?.find((value) => value.id === id);

    return item?.span;
  };

  return (
    <NavDetailContainer>
      <CategoryContainer>
        <CategoryBox
          style={{
            gridTemplateColumns: `repeat(${column}, minmax(0, 1fr))`,
          }}
        >
          {data &&
            data.map((catagoryLevel2) => (
              <CategoryLeve2
                key={catagoryLevel2._id}
                style={{
                  gridColumn: `${handleColumn(catagoryLevel2._id)}`,
                }}
              >
                <NavTitle>{catagoryLevel2.name}</NavTitle>
                <div style={{ display: "flex", gap: "30px" }}>
                  {handleChunkArray(
                    catagoryLevel2?.children,
                    LENGTH_CATEGORY
                  ).map(
                    (listCatagoryLevel3: Array<ICategory>, index: number) => (
                      <div key={index}>
                        {listCatagoryLevel3.map((catagoryLevel3: ICategory) => (
                          <span key={catagoryLevel3._id}>
                            <Link
                              href={`/${catagoryLevel3._id}/${catagoryLevel3.slug}`}
                            >
                              <NavList>{catagoryLevel3.name}</NavList>
                            </Link>
                          </span>
                        ))}
                      </div>
                    )
                  )}
                </div>
              </CategoryLeve2>
            ))}
          <CategoryLeve2
            style={{
              gridColumn: `${column - 1} / ${column}`,
            }}
          >
            <CategoryLeve3>
              <NavImage />
            </CategoryLeve3>
          </CategoryLeve2>
        </CategoryBox>
      </CategoryContainer>
    </NavDetailContainer>
  );
};

export default NavDetail;
