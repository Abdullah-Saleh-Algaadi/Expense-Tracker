import Button from "../../common/Button";

export default function ProfileView({
  user,
  onEditClick,
  onChangePasswordClick,
}) {
  
    return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">
          Personal Information
        </h2>
        <Button
          text="Edit Profile"
          onClick={onEditClick}
          type="secondary"
          className="px-6 py-2.5"
        />
      </div>

      {/* Avatar + Info */}
      <div className="flex items-center space-x-6">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-2xl">
            {user?.username?.charAt(0)?.toUpperCase() || "U"}
          </span>
        </div>

        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Full Name
            </label>
            <p className="text-lg font-semibold text-gray-900">
              {user?.username}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Email Address
            </label>
            <p className="text-lg font-semibold text-gray-900">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Member info */}
      <div className="pt-4 border-t border-gray-200 flex justify-between items-center">
        <p className="text-sm text-gray-500">
          Member since{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <Button
          text="Change Password"
          onClick={onChangePasswordClick}
          type="danger"
          className="px-6 py-2.5 text-sm"
        />
      </div>
    </div>
  );
}
