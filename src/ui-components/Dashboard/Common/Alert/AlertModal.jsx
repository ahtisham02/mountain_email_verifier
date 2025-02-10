import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CircleXIcon } from "lucide-react";

const SuccessModal = () => {
  const Profile = useSelector((state) => state.profile.profile);
  const navigate = useNavigate();

  const hasActiveSubscription = !!Profile?.active_subscription;
  const creditsLeft = Math.ceil(Profile?.credits?.credits || 0);
  const isOutOfCredits = creditsLeft <= 0;

  const subscriptionEndDate = Profile?.active_subscription?.date
    ? new Date(Profile.active_subscription.date)
    : null;

  const today = new Date();
  const daysLeft =
    subscriptionEndDate !== null
      ? Math.ceil((subscriptionEndDate - today) / (1000 * 60 * 60 * 24))
      : null;

  const isSubscriptionEndingSoon = daysLeft !== null && daysLeft <= 4;

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const modalShown = sessionStorage.getItem("modalShown");

    if (!modalShown && hasActiveSubscription) {
      if (isSubscriptionEndingSoon) {
        setOpen(true);
        sessionStorage.setItem("modalShown", "true");
      } else if (isOutOfCredits) {
        setOpen(true);
        sessionStorage.setItem("modalShown", "true");
      }
    }
  }, [hasActiveSubscription, isSubscriptionEndingSoon, isOutOfCredits]);

  const handleNavigation = (path) => {
    setOpen(false);
    setTimeout(() => {
      navigate(path);
    }, 200);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#F3F6F8] rounded-2xl border-[1px] border-[#e8e8e8] pt-10 max-w-[400px] h-[450px] w-full p-6 flex flex-col justify-between text-center">
        <div>
          <CircleXIcon
            className="mx-auto mb-10 text-red-500"
            style={{ width: "210px", height: "150px" }}
          />
          {isSubscriptionEndingSoon ? (
            <>
              <h2 className="text-2xl font-bold mb-2 text-gray-700">
                Your Subscription is Ending Soon!
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                To avoid interruptions, renew or upgrade your subscription now.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-2 text-gray-700">
                Your Credits Are Finished!
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                To continue using our service, please purchase more credits.
              </p>
            </>
          )}
        </div>

        <div className="flex justify-center gap-4 mt-auto">
          <button
            onClick={() =>
              handleNavigation("/buycredits")
            }
            className="bg-btnBackground text-white px-6 py-2 rounded-2xl hover:bg-btnBackgroundhover transition"
          >
            {isSubscriptionEndingSoon ? "Renew Subscription" : "Buy More Credits"}
          </button>
          <button
            onClick={() => setOpen(false)}
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-2xl hover:bg-gray-300 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
