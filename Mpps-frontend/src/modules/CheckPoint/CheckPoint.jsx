// import {React, useState} from "react";
import '../../custom-colors.css';
import '../../App.css'; 
import {MapPin} from "@phosphor-icons/react";
import { Row, Col } from 'react-bootstrap';
import FooterSpe from "../../components/Footer/FooterSpe";
import SideNavBar from '../../components/SideNavBar/SIdeNavBar.jsx';
import Map from "../../modules/MapRouting/Map";
import NavBarPrivate from "../../components/NavBar/NavBarPrivate";
// import { useSelector, useDispatch } from 'react-redux';
// import { setFormData } from '../../controllers/Store.jsx'; 


const Checkpoint = () => {
    // const formData = useSelector((state) => state.formData.formData);
    // const dispatch = useDispatch();
    // const updateFormData = (newData) => {
    //     dispatch(setFormData(newData));
    // };

    // const [startingPoint, setStartingPoint] = useState("");
    // const [endingPoint, setEndingPoint] = useState("");

    
    // const startingPoint = formData.get('startingPoint');
    // const destinationPoint = formData.get('endingPoint');

    return(
        <div>
        <NavBarPrivate/>
        <div>
            <SideNavBar/>
        </div>
        <div>
            <Row className='flex p-4'  style={{borderRadius: "30px", margin: "80px 100px 45px 100px ",backgroundColor: "var(--custom-white)", width: "72rem"}}>
                <Col lg={4}>
                    <Row>
                        <div>
                            <h2 style={{fontSize: "30px", fontWeight: "bold" }}>Route Details</h2>
                            <p>See the number and names of checkpoint along the way from the starting point to the destination of the your route</p>
                        </div>
                        <div className='p-2' style={{border: "2px solid var(--darkish-green)", borderRadius: "14px"}}>
                            <Row >
                                <Col lg={7}>
                                    <div>
                                        <p>Starting point </p>
                                    </div>
                                    <div>
                                        <p>Destination point</p>
                                    </div>
                                    <div>
                                        <p>Number of checkpoints</p>
                                    </div>
                                </Col>
                                <Col lg={5}>
                                    <div style={{borderRadius: "7px", color: "var(--whitish-green)", backgroundColor: "var(--darkish-green)"}}>
                                        {/* <p className='m-2' >{startingPoint}</p> */}
                                    </div>
                                    <div style={{borderRadius: "7px", color: "var(--whitish-green)", backgroundColor: "var(--darkish-green)"}}>
                                        {/* <p className='m-2'>{endingPoint}</p> */}
                                    </div>
                                    <div style={{borderRadius: "7px", color: "var(--whitish-green)", backgroundColor: "var(--darkish-green)"}}>
                                        <p className='m-2'>6</p>
                                    </div>
                                 </Col>
                            </Row>
                         </div>
                    </Row>
                    <Row className=' d-flex justify-content-center align-items-center '>
                        <p className='m-2 text-center' style={{fontSize: "20px", fontWeight: "bold"}}>Checkpoint Available</p>
                        <div className='d-flex flex-wrap flex justify-space-between align-items-center '>
                            <div className='m-2 p-2 justify-content-center  '  style={{width: "5.625rem", height: "5.625rem", borderRadius: "14px", backgroundColor: "var(--darkish-green)"}}>
                                <Row className='m-1'>
                                    <MapPin className=' ' size={35} color="var(--whitish-green)" weight="bold" />
                                </Row>
                                <Row>
                                    <p className=' text-center' style={{color: "var(--whitish-green)"}}>Mafinga</p>
                                </Row>
                            </div>
                            <div className='m-2 p-2 justify-content-center  '  style={{width: "5.625rem", height: "5.625rem", borderRadius: "14px", backgroundColor: "var(--darkish-green)"}}>
                                <Row className='m-1'>
                                    <MapPin className=' ' size={35} color="var(--whitish-green)" weight="bold" />
                                </Row>
                                <Row>
                                    <p className=' text-center' style={{color: "var(--whitish-green)"}}>Makwawa</p>
                                </Row>
                            </div>
                            <div className='m-2 p-2 justify-content-center  '  style={{width: "5.625rem", height: "5.625rem", borderRadius: "14px", backgroundColor: "var(--darkish-green)"}}>
                                <Row className='m-1'>
                                    <MapPin className=' ' size={35} color="var(--whitish-green)" weight="bold" />
                                </Row>
                                <Row>
                                    <p className=' text-center' style={{color: "var(--whitish-green)"}}>Ilula</p>
                                </Row>
                            </div>
                            <div className='m-2 p-2 justify-content-center  '  style={{width: "5.625rem", height: "5.625rem", borderRadius: "14px", backgroundColor: "var(--darkish-green)"}}>
                                <Row className='m-1'>
                                    <MapPin className=' ' size={35} color="var(--whitish-green)" weight="bold" />
                                </Row>
                                <Row>
                                    <p className=' text-center' style={{color: "var(--whitish-green)"}}>Sangasanga</p>
                                </Row>
                            </div>
                            <div className='m-2 p-2 justify-content-center  '  style={{width: "5.625rem", height: "5.625rem", borderRadius: "14px", backgroundColor: "var(--darkish-green)"}}>
                                <Row className='m-1'>
                                    <MapPin className=' ' size={35} color="var(--whitish-green)" weight="bold" />
                                </Row>
                                <Row>
                                    <p className=' text-center' style={{color: "var(--whitish-green)"}}>Kese</p>
                                </Row>
                            </div>
                            <div className='m-2 p-2 justify-content-center  '  style={{width: "5.625rem", height: "5.625rem", borderRadius: "14px", backgroundColor: "var(--darkish-green)"}}>
                                <Row className='m-1'>
                                    <MapPin className=' ' size={35} color="var(--whitish-green)" weight="bold" />
                                </Row>
                                <Row>
                                    <p className=' text-center' style={{color: "var(--whitish-green)"}}>Chalinze</p>
                                </Row>
                            </div>
                         </div>
                    </Row>
                </Col>
                <Col lg={8} className=''>
                    <div className='' style={{borderRadius: "14px", overflow: "hidden"}}>
                        <Map/>
                    </div>
                </Col>
            </Row>
            
        </div>
        
        <FooterSpe/>
    </div>
    )
}

export default Checkpoint