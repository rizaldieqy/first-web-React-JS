import './App.css';

function Reviews(){
    const users = [
      {
        "id" : 1,
        "name" : "Saras",
        "review" : "Harganya gak bikin nyekek meskipun namanya es cekek, mantul, mantap mantul.",
        "foto" : "https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
      },
      {
        "id" : 2,
        "name" : "Tom",
        "review" : "Harganya gak bikin nyekek meskipun namanya es cekek, mantul, mantap mantul.",
        "foto" : "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        "id" : 3,
        "name" : "Shayna",
        "review" : "Harganya gak bikin nyekek meskipun namanya es cekek, mantul, mantap mantul.",
        "foto" : "https://images.pexels.com/photos/5046546/pexels-photo-5046546.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    ];
    const listReview = users.map((itemReview) =>
      <div key={itemReview.id} className="Item">
        <img src={itemReview.foto}></img>
        <div className="User">
          <h3>{itemReview.name}</h3>
          <p>{itemReview.review}</p>
        </div>
      </div>
    );
    return(
      <div className="Review-box">
        <h2>Reviews</h2>
        {listReview}  
      </div>
    )
  }

  export default Reviews;