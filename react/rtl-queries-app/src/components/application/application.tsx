export const Application = () => {
    return (
        <>
            <h1>Job application form</h1>
            <h2>Section 1</h2>
            <p>All fields are mandatory</p>
            <img src='https://d3cif2hu95s88v.cloudfront.net/live-site-2016/product-image/27thDec/pink-comboa-600x600.JPG' alt='flower'/>
            <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type='text' id='name' placeholder="Fullname" value='vijaya sekhar' onChange={() => {}}/>
            </div>
            <div>
                <label htmlFor='bio'>Bio</label>
                <textarea id='bio' name='bio' />
            </div>
            <div>
                <label htmlFor='job-location'>Name</label>
                <select id='job-location'>
                    <option value=''>Select a country</option>
                    <option value='US'>United states</option>
                    <option value='UK'>United Kingdom</option>
                    <option value='CA'>Canada</option>
                    <option value='IN'>India</option>
                    <option value='AU'>Australia</option>
                </select>
            </div>
            <div>
                <label>
                 <input type='checkbox' id='terms'/>I aggree terms and conditions 
                 </label>    
            </div>
            <button>Submit</button>
        </form> 
        </>
    );
}