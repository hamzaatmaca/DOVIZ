<div class="container-fluid">

    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800"><i class="fas fa-pen"></i> Hisse Senedi Tablosu</h1>
    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <button id="search" class="btn btn-info">Arama Yap</button>
        </div>
        <input id="startDate" type="date" placeholder="Başlangıç Tarihi YYYY-MM-DD" class="form-control">
        <input id="endDate" type="date" placeholder="Bitiş Tarihi YYYY-MM-DD" class="form-control">
    </div>
    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Güncel Fiyatlar</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="hisse" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Hisse Senedi</th>
                            <th>Alış</th>
                            <th>Satış</th>
                            <th>Değişim</th>
                            <th>Tarih</th>

                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Hisse Senedi</th>
                            <th>Alış</th>
                            <th>Satış</th>
                            <th>Değişim</th>
                            <th>Tarih</th>
                        </tr>
                    </tfoot>
                    <tbody id="hisseBody">


                    </tbody>
                </table>
            </div>
        </div>
    </div>

</div>