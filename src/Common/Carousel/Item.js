import {Paper} from '@mui/material'

function Item({item})
{  
    return (
    <Paper>
       <img src={item.image} alt ={item.title} style={{width:"100%", height:"60vh"}}/>
       <h2 style={{display:"flex", justifyContent:"center", alignItems: "center", flexDirection:"column"}}>{item.title}</h2>
    </Paper>
    )
}
export default Item;