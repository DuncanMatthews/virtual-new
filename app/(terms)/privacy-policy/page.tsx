import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p>Last Updated: [Date]</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Introduction</h2>
      <p>
        Welcome to Virtual Renovation, an AI-driven interior design application
        that empowers users to explore various design possibilities for their
        living spaces. This Privacy Policy outlines how we collect, use,
        disclose, and safeguard your information when you visit our website and
        use our platform. By using Virtual Renovation, you agree to the
        collection and use of information in accordance with this policy.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Information We Collect
      </h2>

      <h3 className="text-xl font-semibold mt-4 mb-2">Personal Information</h3>
      <p>
        When you use our platform, we may collect the following personal
        information:
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>
          <strong>Contact Information</strong>: Name, email address, and phone
          number.
        </li>
        <li>
          <strong>User-Submitted Content</strong>: Photographs of your room,
          which are essential for the AI to generate design concepts.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">Usage Data</h3>
      <p>
        We may also collect information that your browser sends whenever you
        visit our website or when you access the platform via a mobile device:
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>
          <strong>Log Data</strong>: Internet Protocol (IP) address, browser
          type, browser version, the pages of our site you visit, the time and
          date of your visit, the time spent on those pages, and other
          diagnostic data.
        </li>
        <li>
          <strong>Device Information</strong>: Type of mobile device, unique
          device ID, operating system, and other diagnostic data.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        How We Use Your Information
      </h2>
      <p>We use the information we collect in the following ways:</p>
      <ul className="list-disc list-inside ml-4">
        <li>
          <strong>To Provide and Maintain Our Service</strong>: Analyzing room
          photographs to generate design concepts.
        </li>
        <li>
          <strong>To Communicate with You</strong>: Sending notifications,
          updates, and promotional materials.
        </li>
        <li>
          <strong>To Improve Our Service</strong>: Understanding how users
          interact with our platform to enhance functionality and user
          experience.
        </li>
        <li>
          <strong>To Ensure Security</strong>: Monitoring and analyzing usage
          and activity trends to improve the security of our platform.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Disclosure of Your Information
      </h2>
      <p>
        We may share your information with third parties in the following
        situations:
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>
          <strong>Service Providers</strong>: We may employ third-party
          companies and individuals to facilitate our service, provide the
          service on our behalf, or assist us in analyzing how our service is
          used.
        </li>
        <li>
          <strong>Legal Requirements</strong>: We may disclose your information
          if required to do so by law or in response to valid requests by public
          authorities.
        </li>
        <li>
          <strong>Business Transfers</strong>: In the event of a merger,
          acquisition, or asset sale, your personal information may be
          transferred.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Security of Your Information
      </h2>
      <p>
        We use administrative, technical, and physical security measures to
        protect your personal information. While we strive to use commercially
        acceptable means to protect your personal data, we cannot guarantee its
        absolute security.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Your Data Protection Rights
      </h2>
      <p>
        Depending on your location, you may have the following rights regarding
        your personal information:
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>
          <strong>Right to Access</strong>: Request a copy of your personal
          data.
        </li>
        <li>
          <strong>Right to Rectification</strong>: Request correction of any
          inaccurate or incomplete data.
        </li>
        <li>
          <strong>Right to Erasure</strong>: Request deletion of your personal
          data under certain conditions.
        </li>
        <li>
          <strong>Right to Restrict Processing</strong>: Request restriction of
          processing your personal data under certain conditions.
        </li>
        <li>
          <strong>Right to Data Portability</strong>: Request transfer of your
          personal data to another organization or directly to you.
        </li>
        <li>
          <strong>Right to Object</strong>: Object to our processing of your
          personal data under certain conditions.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Changes to This Privacy Policy
      </h2>
      <p>
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page and
        updating the Last Updated date at the top. You are advised to review
        this Privacy Policy periodically for any changes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at:
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>
          <strong>Email</strong>:{" "}
          <a href="mailto:info@virtualrenovation.com">
            info@virtualrenovation.com
          </a>
        </li>
        <li>
          <strong>Address</strong>: Virtual Renovation, South Africa
        </li>
      </ul>
      <p>
        By using Virtual Renovation, you acknowledge that you have read and
        understood this Privacy Policy and agree to its terms. Thank you for
        trusting Virtual Renovation with your interior design needs.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
