import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const PastEvent = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <SlickHolder>
        <Slider {...settings}>
          <Wrapper>
            <Image src="/images/2.jpeg" />
            <BottomPart>
              <Top>Last Donation</Top>
              <Content>
                <span>20,000</span> of 40,000
              </Content>
            </BottomPart>
          </Wrapper>
          <Wrapper>
            <Image src="/images/3.jpeg" />
            <BottomPart>
              <Top>Last Donation</Top>
              <Content>
                <span>20,000</span> of 40,000
              </Content>
            </BottomPart>
          </Wrapper>
          <Wrapper>
            <Image src="/images/4.jpeg" />
            <BottomPart>
              <Top>Last Donation</Top>
              <Content>
                <span>20,000</span> of 40,000
              </Content>
            </BottomPart>
          </Wrapper>
          <Wrapper>
            <Image src="/images/5.jpeg" />
            <BottomPart>
              <Top>Last Donation</Top>
              <Content>
                <span>20,000</span> of 40,000
              </Content>
            </BottomPart>
          </Wrapper>
          <Wrapper>
            <Image src="/images/6.jpeg" />
            <BottomPart>
              <Top>Last Donation</Top>
              <Content>
                <span>20,000</span> of 40,000
              </Content>
            </BottomPart>
          </Wrapper>
          <Wrapper>
            <Image src="/images/7.jpeg" />
            <BottomPart>
              <Top>Last Donation</Top>
              <Content>
                <span>20,000</span> of 40,000
              </Content>
            </BottomPart>
          </Wrapper>
        </Slider>
      </SlickHolder>
    </Container>
  );
};

export default PastEvent;

const Top = styled.div`
  font-weight: bold;
`;

const Content = styled.div`
  span {
    color: orange;
  }
`;

const BottomPart = styled.div`
  background-color: rgba(230, 230, 230, 1);
  width: 300px;
  padding: 10px;
  border-radius: 0px 0px 10px 10px;
  @media screen and (max-width: 760px) {
    width: 190px;
    font-size: normal;
  }
  /* box-shadow: rgb(0 0 0 / 29%) 0px 26px 30px -10px,
    rgb(0 0 0 / 43%) 0px 16px 10px -10px; */
`;

const Wrapper = styled.div``;

const Image = styled.img`
  height: 300px;
  border-radius: 10px 10px 0px 0px;
  object-fit: cover;
  width: 300px;

  @media screen and (max-width: 768px) {
    width: 190px;
    height: 190px;
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: #f3f4f5;
  height: auto;
  padding-bottom: 50px;
`;

const SlickHolder = styled.div`
  width: 80%;
  margin: auto;
`;
