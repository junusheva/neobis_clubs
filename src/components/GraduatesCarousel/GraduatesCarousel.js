import React from "react";
import { render } from "react-dom";
import Carousel from "./Carousel";
import styled from "styled-components";
import "./GraduatesCarousel.css";
import emir from './Emir.png';
import samat from './samat.png';
import aisalkyn from './aisalkyn.png';
import mamur from './mamur.png';
import SectionTitle from "../UI/SectionTitle/SectionTitle";

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
            "photo": aisalkyn
        },
        {
            "name": "Osmonov Samat",
            "profession": "iOS developer",
            "place": "Zensoft",
            "quote": "I am grateful",
            "photo": samat
        },
        {
            "name": "Emir Amanbekov",
            "profession": "backend developer",
            "place": "Zensoft",
            "quote": "Cпасибо вам.",
            "photo": emir
        },
        {
            "name": "Mamurjon Saitbaev",
            "profession": "Backend developer",
            "place": "Germany",
            "quote": "Thank you, zveri)",
            "photo": mamur
        }
        ]
	}

	render() {
	    const recipe = this.state.mainposts;
	    return (
	      <div className="graduates" id={'graduates'}>
              <SectionTitle title='Наши выпускники'/>
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