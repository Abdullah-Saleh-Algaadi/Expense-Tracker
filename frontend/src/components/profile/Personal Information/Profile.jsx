import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import Header from "../../common/Header";
import Sidebar from "../../common/Sidebar";
import PersonalInformation from "./PersonalInformation";
import FinancialSummary from "../financialSummary/FinancialSummary";

export default function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Header />
      <Sidebar />
      <div className="min-h-screen bg-gray-50 pt-20 pl-64">
        <div className="p-8">
          <div className="mb-8 text-center sm:text-left">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Personal Dashboard
            </h1>
            <p className="text-gray-600 text-lg">
              Manage your personal information and financial overview
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <PersonalInformation user={user} />
            </div>
            <div>
              <FinancialSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
