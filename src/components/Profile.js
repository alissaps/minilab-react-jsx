import puppy from "../assets/images/puppy.jpg";

function Profile() {
    return (
      <div className="card" style={{width: 300}}>
         <img src={puppy} className="card-img-top" alt="Puppy"/>
         <div className="card-body">
            <h2 className="card-title">Cute Puppy</h2>
            <p className="card-text">Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros nunc fringilla id rutrum nibh. Orci convallis pulvinar urna fusce at purus neque nam leo? Suspendisse semper facilisi parturient sit euismod placerat.</p>
         </div>
      </div>
    )
};

export default Profile;

