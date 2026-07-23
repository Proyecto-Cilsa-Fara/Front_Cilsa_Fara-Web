import { CONTACT_INFO } from "../utils/contactInfo";

export const useEmailContact = (service, subject) => {
  const MAILTOMOBILE = `${service == "gmail" ? CONTACT_INFO.EMAIL_1_LINK : CONTACT_INFO.EMAIL_2_LINK}?subject=${encodeURIComponent(subject)}`;

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_INFO.EMAIL_1}&su=${encodeURIComponent(subject)}`;
  const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${CONTACT_INFO.EMAIL_2}&subject=${encodeURIComponent(subject)}`;

  const handleClickEmail = (e) => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault();
      if (service == "gmail") {
        window.open(gmailUrl, "_blank");
      }

      if (service == "outlook") {
        window.open(outlookUrl, "_blank");
      }
    }
    // si es mobile, dejá que el mailto normal haga lo suyo
  };

  return {
    onClikEmail: handleClickEmail,
    mailtoEmail: MAILTOMOBILE,
  }
}
