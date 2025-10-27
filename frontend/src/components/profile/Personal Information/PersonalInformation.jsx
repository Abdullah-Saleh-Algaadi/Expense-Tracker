import { useState } from "react";
import ProfileView from "./ProfileView";
import ProfileEditForm from "./ProfileEditForm";
import ChangePasswordModal from "./ChangePasswordModal";
import useUpdateUser from "../hooks/useUpdateUser";
import useChangePassword from "../hooks/useChangePassword";

export default function PersonalInformation({ user }) {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  const [profileForm, setProfileForm] = useState({
    name: user?.username || "",
    email: user?.email || "",
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [errors, setErrors] = useState({});
  const { updateUserInfo, isLoading: isUpdating } = useUpdateUser();
  const { changePassword, isLoading: isChangingPassword } = useChangePassword();

  // Profile handlers
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = async () => {
    const success = await updateUserInfo(profileForm);
    if (success) setIsEditingProfile(false);
  };

  const handleCancelEdit = () => {
    setIsEditingProfile(false);
    setProfileForm({
      name: user?.username || "",
      email: user?.email || "",
    });
  };

  // Password handlers
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm((prev) => ({ ...prev, [name]: value }));
  };

  const validatePasswords = () => {
    const newErrors = {};
    if (!passwordForm.currentPassword.trim())
      newErrors.currentPassword = "Enter your current password.";
    if (!passwordForm.newPassword.trim())
      newErrors.newPassword = "Enter a new password.";
    else if (passwordForm.newPassword.length < 6)
      newErrors.newPassword = "Password must be at least 6 characters.";
    if (passwordForm.confirmNewPassword !== passwordForm.newPassword)
      newErrors.confirmNewPassword = "Passwords do not match.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUpdatePassword = async () => {
    if (!validatePasswords()) return;
    const success = await changePassword(passwordForm);
    if (success) {
      setIsPasswordModalOpen(false);
      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 max-w-3xl mx-auto">
      {!isEditingProfile ? (
        <ProfileView
          user={user}
          onEditClick={() => setIsEditingProfile(true)}
          onChangePasswordClick={() => setIsPasswordModalOpen(true)}
        />
      ) : (
        <ProfileEditForm
          profileForm={profileForm}
          onChange={handleProfileChange}
          onSave={handleSaveProfile}
          onCancel={handleCancelEdit}
          isLoading={isUpdating}
        />
      )}

      <ChangePasswordModal
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
        passwordForm={passwordForm}
        onChange={handlePasswordChange}
        onSubmit={handleUpdatePassword}
        errors={errors}
        isLoading={isChangingPassword}
      />
    </div>
  );
}
