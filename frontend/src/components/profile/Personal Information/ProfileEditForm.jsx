import Button from "../../common/Button";

export default function ProfileEditForm({
  profileForm,
  onChange,
  onSave,
  onCancel,
  isLoading,
}) {
  return (
    <form onSubmit={onSave} className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">
        Edit Personal Information
      </h2>

      <div className="flex items-center space-x-6">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
          <span className="text-white font-bold text-2xl">
            {profileForm?.name?.charAt(0)?.toUpperCase() || "U"}
          </span>
        </div>

        <div className="flex-1 space-y-4">
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={profileForm.name}
              onChange={onChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={profileForm.email}
              onChange={onChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              placeholder="Enter your email address"
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-3 pt-4 border-t border-gray-200">
        <Button
          text="Cancel"
          onClick={onCancel}
          type="secondary"
          className="flex-1 py-3"
        />
        <Button
          text={isLoading ? "Saving..." : "Save Changes"}
          type="primary"
          className="flex-1 py-3"
        />
      </div>
    </form>
  );
}
