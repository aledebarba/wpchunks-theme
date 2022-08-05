import { useState } from 'react';
import Select from "react-select";
import { TheMap } from './themap';
import { selectStyles  } from "./select-styles";
import posts from "./posts-list.json";

const Fpmaps = () => {

    let i18ntext = { 
        selectCountry: "Country", 
        selectCity: "City",
        selectYear: "Year",
        selectMonth: "Month",
        selectPillar: "Pillar"
    };

    const [ selectedCountry, setSelectedCountry ] = useState( );
    const [ selectedCity,    setSelectedCity    ] = useState( );
    const [ selectedYear,    setSelectedYear    ] = useState( );
    const [ selectedMonth,   setSelectedMonth   ] = useState( );
    const [ selectPillar,    setSelectPillar    ] = useState( );
    
   return <>
        <div className="maps-actions-filter">
            <div className="selects">
                <Select 
                    value={ selectedCountry }
                    id="selectCountry"
                    isMulti={false}
                    isClearable={true}
                    isSearchable={true}
                    styles={selectStyles}
                    placeholder={i18ntext.selectCountry}
                    options={ getListOf("country") }
                    onChange={(e) => setSelectedCountry(e.value)}
                />
                <Select 
                    id="selectCity"
                    isMulti={false}
                    isClearable={true}
                    isSearchable={true}
                    styles={selectStyles}
                    placeholder={i18ntext.selectCity}
                    options={getListOf("city")}
                    onChange={(e) => setSelectedCity(e.value)}
                />
                <Select 
                    id="selectYear"
                    isMulti={false}
                    isClearable={true}
                    isSearchable={true}
                    styles={selectStyles}
                    placeholder={i18ntext.selectYear}
                    options={getListOf("year")}
                    onChange={(e) => setSelectedYear(e.value)}
                />
                <Select 
                    id="selectMonth"
                    isMulti={false}
                    isClearable={true}
                    isSearchable={true}
                    styles={selectStyles}
                    placeholder={i18ntext.selectMonth}
                    options={getListOf("month")}
                    onChange={(e) => setSelectedMonth(e.value)}
                />
                <Select 
                    id="selecPillar"
                    isMulti={false}
                    isClearable={true}
                    isSearchable={true}
                    styles={selectStyles}
                    placeholder={i18ntext.selectPillar}
                    options={getListOf("pillar")}
                    onChange={(e) => setSelectPillar(e.value)}
                />
            </div>
        <div className="post-list">
           { posts.map(post => {

                return <Post {...post} key={post.id} />
            })}
        </div>
        <div className="map">
            <TheMap />
        </div>
        </div>
    </>
}

export default Fpmaps;

const Post = ( { title, country, except, image, link } ) => {
    return <>
        <div className="post-list__post">
            <div className="post-list__post-image">
                <img src={image} alt={title} />
            </div>
            <div className="post-list__post-content">
                <h3 className="country">
                    { country }
                </h3>
                <h3 className="title">
                    { title }
                </h3>
                <p className="except">{except}</p>
                <a href={link} className="link">
                    <div class="post-icon-arrow"></div>
                </a>
            </div>
        </div>
    </>
}

function getListOf(type, lang="en") {
    let res = new Set;
    let date = new Date;  
        
    ["country", "city", "pillar"].includes( type ) ? posts.forEach( post => { 
        res.add(post[type])
    }):null;

    ["year","month"].includes( type ) ? posts.forEach( post => { 
        type === "year" 
          ? res.add( new Date(post.date).getFullYear() ) 
          : res.add( new Date(post.date).toLocaleString(lang,{month:'long'}) )
    }):null;

    return Array.from(res).map( item => { return { value: item, label: item } });
}

