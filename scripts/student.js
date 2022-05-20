app.studentCtrl = function ($scope, $location) {
    $scope.students = [
        { idStudent: 0, name: 'Hien Ho', age: new Date(2004, 01, 01), idKlass: 3 },
        { idStudent: 1, name: 'Son Tung', age: new Date(2006, 01, 01), idKlass: 6 },
        { idStudent: 2, name: 'Nguyen Phuong Hang', age: new Date(2003, 01, 01), idKlass: 2 },
        { idStudent: 3, name: 'Le Roi', age: new Date(2002, 01, 01), idKlass: 7 },
        { idStudent: 4, name: 'Tung Son', age: new Date(2004, 01, 01), idKlass: 8 },
        { idStudent: 5, name: 'Hoai Linh', age: new Date(2006, 01, 01), idKlass: 13 },
        { idStudent: 6, name: 'Dong Nhi', age: new Date(2001, 01, 01), idKlass: 14 }
    ];

    $scope.calculateAge = function (birthdate) {
        return (new Date().getFullYear()) - (new Date(birthdate).getFullYear());
    }

    $scope.getKlass = function(student){
        for(var i = 0; i < $scope.klasses.length; i++){
            if(student.idKlass == $scope.klasses[i].idKlass)
                return $scope.klasses[i].name;
        }
    }

    $scope.studentDefault = $scope.students.slice();
    $scope.inputDataSearch = {};

    $scope.search = function () {
        var tempName = $scope.inputDataSearch.name;
        var tempAge = $scope.inputDataSearch.age;
        var tempKlass = $scope.inputDataSearch.klass;

        $scope.students = angular.copy(_.filter($scope.studentDefault,
            function (student) {
                return ((tempAge === null || tempAge === undefined) || (tempAge !== null && tempAge !== undefined && $scope.calculateAge(student.age) == tempAge)) &&
                    ((tempKlass === null || tempKlass === undefined) || (tempKlass !== null && tempKlass !== undefined && student.klass.includes(tempKlass))) &&
                    ((tempName === null || tempName === undefined) || (tempName !== null && tempName !== undefined && student.name.includes(tempName)));
            }));
    };

}
