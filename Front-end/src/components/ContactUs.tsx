import formPicture from "@/../public/images/form.png";

import { Icons } from "@/config/icons.tsx";

import Form from "@/components/ui/Form.tsx";

// The main component
function ContactUs() {
  return (
    <div className="w-full rounded-3xl bg-white lg:flex">
      <FormPicture />
      <FormSection />
    </div>
  );
}

// The form picture on the right
const FormPicture = () => {
  return (
    <div className="relative h-96 w-full lg:h-auto lg:w-1/2">
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
