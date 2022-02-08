const FormSearch: React.FC = () => {
  return (
    <div>
      <div className='container mt-4'>
        <div className='row '>
          <div>
            <form className='d-flex bg-light py-5 px-3 rounded-3'>
              <input
                className='form-control rounded-0 rounded-start'
                type='search'
                placeholder='Digite sua busca'
                aria-label='Search'
              />
              <button
                className='btn btn-primary px-5 fw-bold rounded-0 rounded-end'
                type='submit'
              >
                BUSCAR
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FormSearch };
