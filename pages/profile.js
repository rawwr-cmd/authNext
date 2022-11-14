import UserProfile from "../components/profile/user-profile";
import { getSession } from "next-auth/react";

function ProfilePage() {
  return <UserProfile />;
}

export const getServerSideProps = async (context) => {
  //extracting the session token cookie from the request
  const session = await getSession({ req: context.req });
  // console.log(session); pulling out email and token

  if (!session) {
    return {
      //u are not limited to use only props and noFound key here
      // notFound: true,
      //redirect the user wo even flashing the profile page
      redirect: {
        destination: "/auth",
        permanent: false, //permanent redirect- no, just when user is not authenticated
      },
    };
  }

  return {
    props: { session },
  };
};

export default ProfilePage;
