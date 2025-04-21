import React from 'react'
import "./Contact.css"
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0848839d-d150-4af8-8435-6ef867948fcc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
         <h3>Send us a message <span className='bi bi-envelope-arrow-up-fill'></span></h3>
         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquam eveniet doloremque inventore excepturi? Vitae temporibus molestiae beatae cupiditate amet natus repellat obcaecati, itaque, iure ut atque dolorem dignissimos quo.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, quos cupiditate eaque possimus laboriosam alias quisquam quo magni nam voluptatem obcaecati eligendi quasi aut quas, est aliquid debitis dolor provident?
         </p>
         <ul>
            <li><span className='bi bi-envelope-at-fill mx-3 '></span> Contact@gmail.com</li>
            <li> <span className='bi bi-phone mx-3'></span> +91 9990909898</li>
            <li><span className='bi bi-geo-alt-fill mx-3'></span> 124 ,lajyar ,Ambala punjab<br></br> Ma 00989 ,India</li>
         </ul>
        </div>
        <div className="contact-col">
        <form onSubmit={onSubmit}>
        <label>Your Name</label>
         <input className='' type='text' name='name' required></input>
         <label>Phone Number</label>
         <input className='' type='tel' name='phone' required></input>
         <label>Write your Message here</label>
         <textarea name='message' id="" cols="30" rows="10" required ></textarea>
         <button className=' fw-bold  btn btn-outline-primary p-1' type='submit' >CONTACT-US<span className='bi bi-arrow-right mx-2'></span></button>
      </form>
      <span>{result}</span>
      </div>   
    </div>
  )
}

export default Contact
