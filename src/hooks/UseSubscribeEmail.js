import { useState } from "react";
import { subscribeEmail } from "../api/furnitureApi";

const UseSubscribeEmail = () => {
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSubscribe = async (email) => {
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const sanitizedEmail = email.trim().toLowerCase();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(sanitizedEmail)) {
        throw new Error("Please enter a valid email address");
      }

      const res = await subscribeEmail(sanitizedEmail);
      setMessage(res.data.message || "Subscribe Successfully");
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "Subscription failed",
      );
    } finally {
      setLoading(false);
    }
  };
  return {loading, err, message, handleSubscribe}
};

export default UseSubscribeEmail;
