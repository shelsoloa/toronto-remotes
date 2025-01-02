export default function AboutPage() {
  return (
    <>
      <AboutProjectSection />
      <AboutTeamSection />
    </>
  );
}

function AboutProjectSection() {
  return (
    <div className='flex flex-col'>
      <h2 className='text-3xl font-bold'>the project</h2>
      <p>
        The Toronto Remote Working Spots Database is a collection of remote working spots in
        Toronto.
      </p>
      <p>We aim to provide a list of places in Toronto that are good for remote working.</p>
      <p>We want to make it easier for people to find a place to work remotely from in Toronto.</p>
    </div>
  );
}

function AboutTeamSection() {
  return (
    <div className='flex flex-col pt-8'>
      <h2 className='text-3xl font-bold'>the team</h2>
      <p>
        TRWSDB is a project by{' '}
        <a
          href='https://shelsoloa.com'
          className='text-amber-500 underline hover:text-amber-600'
        >
          Shel Soloa
        </a>
        .
      </p>
    </div>
  );
}
