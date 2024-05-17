import React from 'react'
import Func_props from './Func_props'
import Class_props from './Class_props'

function Main_Props() {
    return (
        <div className='container'>
            <div className="row">
                <Func_props title="Gap" desc="Regular Fit Polo T-Shirt with Logo Embroidery" img="https://assets.ajio.com/medias/sys_master/root/20230513/IT84/645fd57042f9e729d783402d/-473Wx593H-441777742-green-MODEL3.jpg" />
                <Func_props title="Gap" desc="Regular Fit Logo Pique Polo T-Shirt" img="https://assets.ajio.com/medias/sys_master/root/20230203/7BwT/63dce33ff997dd708e36da5a/-473Wx593H-441777867-blue-MODEL.jpg" />
                <Func_props title="Gap" desc="Striped Standard Fit All-Day Poplin Shirt" img="https://assets.ajio.com/medias/sys_master/root/20230502/rqZx/6450e7dfd55b7d0c638e6450/-473Wx593H-441777923-ltgreen-MODEL4.jpg" />

                <hr />

                <Class_props title="Gap" desc="High-Rise Logo Print Regular Fit Shorts" img="https://assets.ajio.com/medias/sys_master/root/20230601/rJfp/6478cbe3d55b7d0c63317e48/-473Wx593H-442029622-purple-MODEL4.jpg" />
                <Class_props title="Gap" desc="Striped Crew-Neck T-Shirt" img="https://assets.ajio.com/medias/sys_master/root/20230808/q97L/64d25894eebac147fcb48f20/-473Wx593H-442110725-black-MODEL8.jpg" />
                <Class_props title="Gap" desc="Mid-Wash Low-Rise Denim Shorts" img="https://assets.ajio.com/medias/sys_master/root/20230808/COlA/64d26890eebac147fcb4eb62/-473Wx593H-442110611-mediumblue-MODEL6.jpg" />


            </div>
        </div>
    )
}

export default Main_Props