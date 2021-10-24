

const ProductData = [
  
    {Product:"Mobile Phone",Brand:'Samsung',Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"},
    {Product:"Mobile Phone",Brand:'Nokia',Description:"lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"},
    {Product:"Mobile Phone",Brand:'Oppo',Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"},
    {Product:"Mobile Phone",Brand:'BalackBerry',Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"},
    {Product:"Mobile Phone",Brand:'Infinix',Description:"lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"},
    {Product:"Mobile Phone",Brand:'Techno',Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"},
  ];
  
  export default function MyReactComponent() {
    return (
      <>
        {ProductData.map(({ Product, Brand,Description }) => (
         <div className="card" style={{width:"18rem" ,textAlign:"center",  display:"inline-block",margin:"20px"
         }}>
     
       <div className="card-body">
         <img  className="card-img-top" alt="..."/>
           <h5   className="card-title">{Product}</h5>
           <p  className="card-text">{Brand}</p>
           <p >{Description}</p>
           <a  href="/" className="btn btn-primary">Go somewhere</a>
         </div>
       
       </div>
        ))}
      </>
    );
  }