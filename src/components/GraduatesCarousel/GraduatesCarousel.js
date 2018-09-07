import React from "react";
import { render } from "react-dom";
import Carousel from "./Carousel";
import styled from "styled-components";
import "./GraduatesCarousel.css";

const content = Array(14).fill("BOX");
const Box = styled.div`
	border: none;
`;
class GradCarousel extends React.Component {
	state = {
		mainposts:[{
            "name": "Tashmatova Aisalkyn",
            "profession": "Android Developer",
            "place": "MadDevs",
            "quote": "I opened new opportunities",
            "photo": "https://muenueschkoer.s3.amazonaws.com/aisa.png"
        },
        {
            "name": "Osmonov Samat",
            "profession": "iOS developer",
            "place": "Zensoft",
            "quote": "I am grateful",
            "photo": "https://muenueschkoer.s3.amazonaws.com/logo.png"
        },
        {
            "name": "Bill Gates",
            "profession": "full-stack, ceo",
            "place": "Microsoft",
            "quote": "Очень понравилось обучаться, спасибо.",
            "photo": "https://muenueschkoer.s3.amazonaws.com/614_v9_ba.jpg"
        },
        {
            "name": "Peekaboo",
            "profession": "Profession",
            "place": "google",
            "quote": "kapeekapeekaboo",
            "photo": "https://muenueschkoer.s3.amazonaws.com/614_v9_ba.jpg"
        },
        {
            "name": "Test test",
            "profession": "tester",
            "place": "testla",
            "quote": "tesingsteisntiesntiesn",
            "photo": "https://muenueschkoer.s3.amazonaws.com/614_v9_ba.jpg"
        },
        {
            "name": "test toast",
            "profession": "toaster",
            "place": "tasty",
            "quote": "tasty tasty",
            "photo": "https://muenueschkoer.s3.amazonaws.com/614_v9_ba.jpg"
        },
        ]
	}

	render() {
	    const recipe = this.state.mainposts;
	    return (
	      <div className="graduates">
	        <p className="title">Наши выпускники</p>
	        <div className="title-divider" />
	        <Carousel initialIndex={1} style={{ }}>
	          {recipe.map(one => (
	            <Box>
	              {
	                <div key={one.id} style={{ marginBottom: "2rem" }}>
	                  <div className="box">
	                    <img className="box-img" src={one.photo} alt={one.name} />
	                    <div className="text-box">
	                      <h5 className="name">{one.name}</h5>
	                      <p className="prof">
	                        <span>{one.profession}</span>
	                        <br />
	                        <span>место работы: {one.place}</span>
	                      </p>
	                      <div className="divider" />
	                      <p className="subtitle">
	                        <span>{one.quote}</span>
	                      </p>
	                    </div>
	                  </div>
	                </div>
	              }
	            </Box>
	          ))}
	        </Carousel>
	      </div>
	    );
	  }
	}

export default GradCarousel;