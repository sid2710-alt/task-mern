const Booke=({book})=>{ 
    return(
        <div id="container">	
	

    <div class="product-details">
      
    
    <h1>{book.volumeInfo.title}</h1>
  
    <span class="hint-star star">
      <i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star-half-o" aria-hidden="true"></i>
      <i class="fa fa-star-o" aria-hidden="true"></i>
    </span>
      
    
  
      <p class="information">" {book.volumeInfo.description} "</p>
  
      
      
  
  <div class="control">
    
  
    <button class="btn">
  
     <span class="price">49 $</span>
  
     <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
  
     <span class="buy">Buy Now</span>
   </button>
  
    
  </div>
        
  </div>
    
  
    
  <div class="product-image">
    
    //<img src={book.volumeInfo.imageLinks?.thumbnail?book.volumeInfo.imageLinks.thumbnail:`https://picsum.photos/200/300`} />
    

  </div>
  
  
  
  </div>
    )
}
export default Booke;