import React from 'react'

const InfoCar = ({ category }) => {

    const getInformation = () => {

        if (category === 'Engine') {

            return (
                <>

                    <div><span>Power-maximum :</span>579 CV / 426 kW</div>
                    <div><span>Maximum revolutions :</span>8.000 rpm"</div>
                    <div><span>Number of cylinders : </span>10</div>
                    <div><span>Cylinder arrangement : </span>  V  </div>
                    <div><span>Diameter : </span>84,5 mm  </div>
                    <div><span>Displacement : </span> 5.204 cm³ </div>
                    <div><span>Compression ratio : </span>12,7 a 1  </div>

                </>
            )
        }
        else if (category === 'Dimensions') {
            return (
                <>
                    <div><span>Body Type: </span> Coupé </div>
                    <div><span>Number of doors : </span> 2 </div>
                    <div><span>Length : </span> 4.459 mm </div>
                    <div><span>Width : </span> 1.924 mm </div>
                    <div><span>Weight : </span>1.518 kg  </div>
                    <div><span>Fuel tank: </span> Gasoline </div>
                    <div><span> Seating distribution : </span> 2 </div>


                </>
            )
        } else if (category === 'Transmission') {

            return (
                <>
                    <div> <span>Transmission Traction : </span> Rear</div>
                    <div> <span>  Gearbox : </span> Automatic</div>
                    <div> <span> Number of speeds  : </span> 7 </div>
                    <div> <span> Command type  : </span>Not available </div>
                    <div> <span> Clutch Type  : </span> Two oil-bathed multi-disc clutches</div>
                    <div> <span>  Mechanism Type : </span> Gear Pairs </div>
                </>
            )

        }



    }
    return (
        getInformation()
    )
}

export default InfoCar
