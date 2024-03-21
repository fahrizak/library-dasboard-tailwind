import {library, gramedia, togamas} from '../assets'

const Dashboard = () => {
    return ( 
        <section className="lg:pl-[310px] lg:pt-24 mb-14 overflow-y-auto px-6 pt-[4.5rem] max-w-[1192px]">
            <h2 className="page__title text-gray-500 font-semibold text-xl mb-4">Dashboard</h2>

            <div className=" grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-y-5 gap-x-8 py-4">
                <article className="flex justify-between items-center px-8 py-4 bg-white rounded-lg shadow-md">
                  <figure>
                    <img src={library} alt="" className="dashboard__img h-[60px]" />
                  </figure>

                    <div className="flex flex-col justify-between gap-y-1">
                    <div className="text-5xl text-orange-500 font-bold text-right">23</div>
                        <div className=" text-gray-600 text-base font-semibold">Total Buku</div>
                    </div>
                </article>

                <article className=" flex justify-between items-center px-8 py-4 bg-white rounded-lg shadow-md">
                  <figure>
                    <img src={gramedia} alt="" className=" h-[60px]" />
                  </figure>

                    <div className=" flex flex-col justify-between gap-y-1">
                    <div className=" text-5xl text-orange-500 font-bold text-right">23</div>
                        <div className=" text-gray-600 text-base font-semibold">Total Buku</div>
                    </div>
                </article>

                <article className="flex justify-between items-center px-8 py-4 bg-white rounded-lg shadow-md">
                  <figure>
                    <img src={togamas} alt="" className=" h-[60px]" />
                  </figure>

                    <div className=" flex flex-col justify-between gap-y-1">
                        <div className=" text-5xl text-orange-500 font-bold text-right">23</div>
                        <div className=" text-gray-600 text-base font-semibold">Total Buku</div>
                    </div>
                </article>
            </div>
        </section>
     );
}
 
export default Dashboard;