export default function NetflixRegisterComponent()
{
    return(
        <>
        <div align="center" className="text-center bg-dark p-5">
            <p>Ready to watch? Enter your email to create or restart your membership</p>
            <div className="input-group input-group-lg w-50 new">
                <input type="text" className="form-control" />
                <button className="btn btn-danger">Get started <span className="bi bi-chevron-right"></span></button>
            </div>


        </div>
        </>
    );
}