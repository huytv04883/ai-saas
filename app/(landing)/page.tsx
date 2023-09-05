import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { Fragment } from "react";

const LandingPage = () => {
  return (
    <Fragment>
      <div className="h-screen bg-gradient-to-r from-[#135058] to-[#f1f2b5] flex items-center justify-center flex-col gap-4">
        <h2 className="text-white">Wellcome to Generation AI </h2>
        <div className="flex items-center justify-center gap-4">
          <Link href="/sign-in">
            <Button>Login</Button>
          </Link>
          <Link href="/sign-up">
            <Button>Register</Button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default LandingPage;
