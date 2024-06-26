import { Icons } from "@/config/icons.tsx";

import Form from "@/components/ui/Form.tsx";

import formPicture from "/images/form.png";

// The main component
function ContactUs() {
  return (
    <div className="mx-auto w-11/12 md:container md:w-10/12">
      <div id="contact-us" className="rounded-3xl bg-white lg:flex">
        <FormPicture />
        <FormSection />
      </div>
    </div>
  );
}

// The form picture on the right
const FormPicture = () => {
  return (
    <div className="relative h-56 w-full lg:h-auto lg:w-1/2">
      <img
        src={formPicture}
        alt="form"
        className="h-full w-full rounded-t-3xl object-cover lg:rounded-r-3xl lg:rounded-tl-none"
      />
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
        <Icons.whiteLogo className="h-20 w-20" />
      </div>
    </div>
  );
};

// The form section on the left
const FormSection = () => {
  return (
    <section className="flex w-full items-center justify-center lg:w-1/2">
      <Form />
    </section>
  );
};

export default ContactUs;
