'use client';

export default function ContactForm() {
  return (
    <div className="card flex-shrink-0 w-full shadow-2xl bg-secondary text-secondary-content flex-[2]">
      <div className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text text-secondary-content">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered bg-base-content" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-secondary-content">Email</span>
          </label>
          <input type="text" placeholder="Email" className="input input-bordered bg-base-content text-base-100" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-secondary-content">Message</span>
          </label>
          <textarea className="textarea textarea-bordered text-base bg-base-content text-base-100" placeholder="Message"></textarea>
        </div>

        <div className="form-control mt-6 transition-all hover:-translate-y-1">
          <button className="btn btn-primary text-primary-content hover:bg-primary-focus">Send</button>
        </div>

      </div>
    </div>
  );
}