import {library, gramedia, togamas} from '../assets'

const Dashboard = () => {
    return ( 
        <section className="dashboard lg:pl-[310px] lg:pt-24 mb-14 overflow-y-auto px-6 pt-[4.5rem] max-w-[1192px]">
            <h2 className="page__title text-gray-500 font-semibold text-xl mb-4">Dashboard</h2>

            <div className="dashboard__content grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-y-5 gap-x-8 py-4">
                <article className="dashboard__card flex justify-between items-center px-8 py-4 bg-white rounded-lg shadow-md">
                  <figure>
                    <img src={library} alt="" className="dashboard__img h-[60px]" />
                  </figure>

                    <div className="dashboard__card-data flex flex-col justify-between gap-y-1">
                    <div className="dashboard__card-number text-5xl text-orange-500 font-bold text-right">23</div>
                        <div className="dashboard__card-title text-gray-600 text-base font-semibold">Total Buku</div>
                    </div>
                </article>

                <article className="dashboard__card flex justify-between items-center px-8 py-4 bg-white rounded-lg shadow-md">
                  <figure>
                    <img src={gramedia} alt="" className="dashboard__img h-[60px]" />
                  </figure>

                    <div className="dashboard__card-data flex flex-col justify-between gap-y-1">
                    <div className="dashboard__card-number text-5xl text-orange-500 font-bold text-right">23</div>
                        <div className="dashboard__card-title text-gray-600 text-base font-semibold">Total Buku</div>
                    </div>
                </article>

                <article className="dashboard__card flex justify-between items-center px-8 py-4 bg-white rounded-lg shadow-md">
                  <figure>
                    <img src={togamas} alt="" className="dashboard__img h-[60px]" />
                  </figure>

                    <div className="dashboard__card-data flex flex-col justify-between gap-y-1">
                        <div className="dashboard__card-number text-5xl text-orange-500 font-bold text-right">23</div>
                        <div className="dashboard__card-title text-gray-600 text-base font-semibold">Total Buku</div>
                    </div>
                </article>
            </div>
        </section>
     );
}
 
export default Dashboard;