
"use client"
import Image from "next/image";
import {useState} from 'react';
// import image1 from '../public/image1.png';
// import image2 from '../public/image2.png';
// import image3 from '../public/image3.png';

export default function Home() {

  const [content, setContent]=useState([{type:'content',image:'/images/image1.png',name:'Sacramento River Cats',totalEvents:'48 Events',sport:'Baseball'},{type:'content',image:'/images/image2.png',name:'Las Vegas Aviators',totalEvents:'28 Events',sport:'Baseball'},{type:'content',image:'/images/image3.png',name:'New Jersey Devils',totalEvents:'15 Events',sport:'Ice Hockey'},{type:'content',image:'/images/image2.png',name:'Las Vegas Aviators',totalEvents:'28 Events',sport:'Baseball'},{type:'ad',image:'https://s3-alpha-sig.figma.com/img/c724/731e/f71497e0e3af85c77fa47046bb1f23cb?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YfHZuev7WUagkCJeDUVdHbkG5bqC2YmjXKJSZLKbyymg8PLUCF1d-3ITeG2OSpcKgHjVq3lbGf7eLgT0-RWii9vAbSSrltvD7RI88jX3A1p0QZTvL~643uJOzylJw00w1DWQKzrTEHLkK2D4jxJ4n3C9D03B-Odrn9zVjUWBi9mqnU5op991kONICO-AT7eCWb2APcuZxUGYnj8xpoj5L5modFS2ABEy2X1gaT0HXJZoVu2276JkODvrtjnC3F4~lM3f7rLQQam1iI8a3frGTCuFQfbXM3VAQ7nfBJDVDCcyeJcyc4m1oPldx2ONzo2CGn5jRfonRO5RlD-OHbierA__',title:'Advertisement title',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}]);

  const [content2, setContent2]=useState([{image:'https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YxtMQ-umkbEHlxMyMnstAs6rYbIBMoz6Y6e6X~XvOsr-rAQ2g4qOWln3w~caMGqtbtAtbCjyj-yjVTMTm1mZVFfJBk5KOXa491~GuF-sCId9i622FHtykZ-nY9kpx54GqgSCB2nGFH3HeaHmDDrU0aEinZpFFnqbmnXRqB9agt6U5PFCW70dobn1FS2-uCCVjf-JcgJzpDyt6xoO-4xWk6IWNKkJCo1K7Ad4KoEpKKDiFYyDhsXOKGZrevPj~1tdFMRrtdkTS8ckyL82IMwnzlMMtKVgab1EpeEiBiF-BW88PwJ0towH4BaKyuBx~E-cLgN0lW8hacJNXlAv-u1nFA__', name:'Las Vegas Aviators', date:'OCT 15', day:'SUN', time:'4:30 PM', address:'Las Vegas Ballpark, Las Vegas, Nevada', button:'Take Flight Collection'},{image:'https://s3-alpha-sig.figma.com/img/3de4/4e83/b6e3aeda879dc6f22f94711c788789b5?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ptz8aSbr1X2gpkQvNp75uy5Qqc3G8thxATUNJrSlH2UpQlPHInbDDZzPDm06nh~Nz5I1JJ4DJV7c8-QhyhII56mMhaJJpXXDp1PCUpSFQ4e8Ye14EdQY91xENMHr1f0JdG2SSkVcxAMgzFhchgpPmcJgVvZX42PQo9HDwrB-Mu9YzL8HDg5lqq592kuVfpcoCk2mmirfFLs7nHYKlxKizeHFC38nNStqJTHYUJHGziz0RNo2oRTX9lYT5MCG0g7fSSu968zB9IjW7Xu5z337Wt3fLdxiQu12YbUec3D-iYVeMH-6xRitiF8XgVwKniDwWIEs6yrvu122pOCHDB~P6g__', name:'Sacramento River Cats', date:'OCT 15', day:'SUN', time:'4:30 PM', address:'Sutter Health Park, Sacramento, California', button:'Orange Collection'},{image:'https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YxtMQ-umkbEHlxMyMnstAs6rYbIBMoz6Y6e6X~XvOsr-rAQ2g4qOWln3w~caMGqtbtAtbCjyj-yjVTMTm1mZVFfJBk5KOXa491~GuF-sCId9i622FHtykZ-nY9kpx54GqgSCB2nGFH3HeaHmDDrU0aEinZpFFnqbmnXRqB9agt6U5PFCW70dobn1FS2-uCCVjf-JcgJzpDyt6xoO-4xWk6IWNKkJCo1K7Ad4KoEpKKDiFYyDhsXOKGZrevPj~1tdFMRrtdkTS8ckyL82IMwnzlMMtKVgab1EpeEiBiF-BW88PwJ0towH4BaKyuBx~E-cLgN0lW8hacJNXlAv-u1nFA__', name:'Las Vegas Aviators', date:'OCT 15', day:'SUN', time:'4:30 PM', address:'Las Vegas Ballpark, Las Vegas, Nevada', button:'Take Flight Collection'}])
  return <div className="bg-[#F7F7F8] size-full	w-full h-full  pt-10">
    <div className="flex justify-center">
    <div className="w-[1241px] h-[627px] " style={{
      top:"-513px",
      left:"-2019px",
      
      color:'#000000'
    }}>
      <p className="font-bold text-[24px]">Sports</p><hr style={{width:'80px',height:'2px', border:'2px solid #738FFF'}}/>
      <div className="flex pt-[20px]" style={{justifyContent:'space-between'}}>
      {content.map((x,index)=>{return x.type==='content' ? (<div className="shadow-lg bg-[#FFFFFF]" style={{  width:'237px', height:'511px'}}>
        
        <img className="w-[217px] h-[385.31px]  ml-[10px] mt-[10px]" src={x.image}/>
        <p className="mt-[12px] mb-[15px]" style={{textAlign:'center'}}>{x.name}</p>

        <div className="w-[217px] h-[54px] bg-[#F7F7F8] ml-[8px] flex" style={{ borderRadius:'2px',  justifyContent:'space-between'}}>
           <div className="ml-[12px] font-normal text-[12px] mt-[7px]">Total Events<br/><p className="font-medium text-[14px] mt-[2px]">{x.totalEvents}</p></div>
           <div className="mr-[25px] font-normal text-[12px] mt-[7px]">Sport<br/><p className="font-medium text-[14px] mt-[2px]">{x.sport}</p></div>
        </div>
    </div>) : (<div className="shadow-lg bg-[#FFFFFF]" style={{  width:'237px', height:'511px'}}><div className="bg-black w-[47.78px] h-[25px] mt-[10px]  absolute  ml-[179px] font-bold text-[12.8px
]" style={{zIndex:'2px',textAlign:'center',color:'white'}}>Ad</div> 
        <img className="w-[217px] h-[218px]  ml-[10px] mt-[10px]" src={x.image}/>
        
        <p className="mt-[12px] mb-[15px] font-semibold text-[20px]" style={{textAlign:'center'}}>{x.title}</p>

        <div className=" flex font-normal text-[12.8px] ml-[25px] mr-[25px]" style={{ borderRadius:'2px',  justifyContent:'space-between'}}>
           {x.desc}
        </div>
    </div>)})}
    </div>
      

    </div></div>
      
      <div  className="justify-center b-0" style={{display:'flex'}}>
      <button className="h-[46px] w-[124px] bg-[#2C9CF0]" style={{borderRadius:'3px', color:'white'}}>See more</button>
      </div><br/>

      <div className="flex justify-center pt-8 pb-10">
      <div className="h-[918px] w-[1240px] justify-center flex" style={{color:'white', background:'linear-gradient(#F9F8FF,#F3F9FF)'}}>
      {/* <div className=""> */}
      <p className="w-[505px] h-[52px] font-bold text-[50px] pt-[50px]" style={{color:'#000000'}}>Collection Spotlight</p>
      
      {/* </div> */}
      <div className="absolute mt-[150px] w-[1240px] h-[100px] pl-[150px] pr-[150px] justify-center flex">
        <p className="font-normal text-[14px]" style={{textAlign:'center', color:'#000000'}}>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
      </div>
      
      <div  className="mt-[250px] flex absolute w-[1085.75px] ml-[35px] mr-[50px]" style={{justifyContent:'space-between'}}><button className="mr-[70px] w-[36.75px] h-[49px] mt-[300px]" style={{border:'1px solid #2C9CF0'}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#2C9CF0">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
</button>
        {content2.map((x,index)=>(<div key={index} className="shadow-lg bg-[#FFFFFF]" style={{width:'257px', height:'624px',marginRight: '50px'}}>
          {/* {x} */}
          <img className="w-[226.1px] h-[401.25px] ml-[14px]  mt-[14px]" src={x.image}/>
          
          <div className="relative">
          <div className="bg-[#F3F9FF] h-[20px] w-[12px] mt-[11px] absolute" style={{borderTopRightRadius:'20px', borderBottomRightRadius:'20px', left:'0px'}}/>
          <div className="bg-[#F3F9FF] h-[20px] w-[12px] mt-[11px] absolute" style={{borderTopLeftRadius:'20px', borderBottomLeftRadius:'20px', right:'0px'}}/>
          </div><hr className="mt-[20px] ml-[25px] mr-[25px]" style={{borderTop:'2.5px dashed #818A97', zIndex:'-2px'}}/>
          <p  className="mt-[8px] font-medium text-[17px]" style={{textAlign:'center', color:'#000000'}}>{x.name}</p>
          <p className="mt-[10px] font-normal text-[14px]" style={{textAlign:'center', color:'#000000'}}>{x.date} | {x.day} | {x.time}</p>
          <p className="mt-[10px] font-normal text-[14px]" style={{textAlign:'center', color:'#000000'}}>{x.address}</p>

          <button className="bg-[#1D1D1F] w-[213px] h-[36px] ml-[20px] mt-[15px]">{x.button}</button>

          </div>))}
          <button className="w-[36.75px] h-[49px] mt-[300px] ml-[20px]" style={{border:'1px solid #2C9CF0'}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#2C9CF0">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</button>
      </div>
      
      </div></div>  
    

  </div>
}
