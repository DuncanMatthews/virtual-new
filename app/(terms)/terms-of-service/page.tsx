import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p>Last Updated: [Date]</p>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p>
          Welcome to Virtual Renovation. These Terms of Service govern your use
          of our AI-driven interior design application and website. By accessing
          or using Virtual Renovation, you agree to be bound by these Terms. If
          you do not agree with these Terms, please do not use our service.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">Use of Our Service</h2>
        <p>
          Virtual Renovation grants you a non-exclusive, non-transferable,
          revocable license to access and use our platform strictly in
          accordance with these Terms.
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>
            You agree not to use the service for any unlawful purpose or any
            purpose prohibited by these Terms.
          </li>
          <li>
            You agree not to attempt to interfere with the proper working of the
            service.
          </li>
          <li>
            You agree not to use the service in any manner that could damage,
            disable, overburden, or impair the service.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">User-Submitted Content</h2>
        <p>
          By submitting photographs of your room or any other content to Virtual
          Renovation, you grant us a non-exclusive, royalty-free, worldwide,
          sublicensable, and transferable license to use, reproduce, distribute,
          prepare derivative works of, display, and perform the content in
          connection with the service.
        </p>
        <p>
          You represent and warrant that you have the necessary rights to grant
          us this license for any content you submit.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">Intellectual Property</h2>
        <p>
          All content on Virtual Renovation, including but not limited to text,
          graphics, logos, images, and software, is the property of Virtual
          Renovation or its content suppliers and is protected by copyright,
          trademark, and other laws.
        </p>
        <p>
          You agree not to copy, modify, distribute, or create derivative works
          based on any content from the service without our prior written
          permission.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">Termination</h2>
        <p>
          We may terminate or suspend your access to the service immediately,
          without prior notice or liability, for any reason whatsoever,
          including without limitation if you breach the Terms.
        </p>
        <p>
          Upon termination, your right to use the service will cease
          immediately. If you wish to terminate your account, you may simply
          discontinue using the service.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">Limitation of Liability</h2>
        <p>
          In no event shall Virtual Renovation, nor its directors, employees,
          partners, agents, suppliers, or affiliates, be liable for any
          indirect, incidental, special, consequential, or punitive damages,
          including without limitation, loss of profits, data, use, goodwill, or
          other intangible losses, resulting from (i) your use or inability to
          use the service; (ii) any unauthorized access to or use of our servers
          and/or any personal information stored therein; (iii) any interruption
          or cessation of transmission to or from the service; (iv) any bugs,
          viruses, trojan horses, or the like that may be transmitted to or
          through our service by any third party; (v) any errors or omissions in
          any content or for any loss or damage incurred as a result of the use
          of any content posted, emailed, transmitted, or otherwise made
          available through the service; and/or (vi) any defamatory, offensive,
          or illegal conduct of any third party. In no event shall our aggregate
          liability exceed the amount paid by you for the service.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the
          laws of Cape Town, South Africa, without regard to its conflict of law
          provisions.
        </p>
        <p>
          Our failure to enforce any right or provision of these Terms will not
          be considered a waiver of those rights. If any provision of these
          Terms is held to be invalid or unenforceable by a court, the remaining
          provisions of these Terms will remain in effect. These Terms
          constitute the entire agreement between us regarding our service, and
          supersede and replace any prior agreements we might have had between
          us regarding the service.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">Changes to These Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. If a revision is material we will provide at
          least 30 days notice prior to any new terms taking effect. What
          constitutes a material change will be determined at our sole
          discretion.
        </p>
        <p>
          By continuing to access or use our service after those revisions
          become effective, you agree to be bound by the revised terms. If you
          do not agree to the new terms, please stop using the service.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Email: info@virtualrenovation.com</li>
          <li>Address: Virtual Renovation, South Africa</li>
        </ul>
      </section>
    </div>
  );
};

export default TermsOfService;
