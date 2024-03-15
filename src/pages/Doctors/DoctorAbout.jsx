import React from "react";
import { formateDate } from "../../utils/formateDate";
function DoctorAbout() {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading--[30px] text-headingColor font-semibold flex items-center gap-2 ">
          About of{" "}
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            {" "}
            Dr. Anand Patel
          </span>
        </h3>
        <p className="text__para">
          Dr. Anand Patel is a skilled surgeon dedicated to healing and saving
          lives. Renowned for his precision and compassion, he embodies the
          epitome of medical expertise. With a steadfast commitment to patient
          care, Dr. Patel continually seeks innovation in surgical techniques,
          ensuring the highest standards of practice. His unwavering dedication
          to his profession and patients has earned him widespread respect and
          admiration within the medical community.
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading--[30px] text-headingColor font-semibold ">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("09-13-2009")} - {formateDate("09-13-2013")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                MBBS
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              B.J. Medical College.
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("07-04-2013")} - {formateDate("07-13-2016")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                MD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              B.J. Medical College.
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading--[30px] text-headingColor font-semibold ">
          Exerience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formateDate("09-13-20014")} - {formateDate("09-13-2022")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr.Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Bhagyoday Hospital, Kadi
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formateDate("12-13-2022")} - Present
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr.Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Panchshil Surgical Hospital, , Kadi
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DoctorAbout;
