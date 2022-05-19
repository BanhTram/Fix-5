app.classExpandDeleteCtrl = function ($scope, $location) {

    $scope.maxLevel = function (object) {
        var max = 0;

        for (var i = 1; i < object.length; i++) {
            if (max < object[i].level) {
                max = object[i].level;
            }
        }

        return max;
    }

    $scope.findArrayIndexKlass = function (object, level, parentID) {
        $scope.arrayIndex = [];

        for (var i = 0; i < object.length; i++) {
            if (level < object[i].level && object[i].level <= $scope.maxLevel($scope.klasses) && object[i].parentID == parentID) {
                $scope.arrayIndex.push(i);
            }
        }

        return $scope.arrayIndex;
    };

    $scope.findArrayIndexStudent = function (students, klasses, level, parentID) {
        $scope.arrayIndex = [];

        for (var i = 0; i < klasses.length; i++) {
            for (var j = 0; j < students.length; j++) {
                if (level <= klasses[i].level &&
                    klasses[i].level <= $scope.maxLevel($scope.klasses) &&
                    klasses[i].parentID == parentID &&
                    klasses[i].idKlass == students[j].idKlass
                ) {
                    $scope.arrayIndex.push(students[j].idStudent);
                }
            }
        }

        return $scope.arrayIndex;
    };

    $scope.deleteClass = function (klass) {
        var index = $scope.klasses.findIndex(temp => temp.idKlass == klass.idKlass);

        var tempLevel = $scope.klasses[index].level;
        var tempParentID = $scope.klasses[index].parentID;
        var tempIDKlass = $scope.klasses[index].idKlass;

        $scope.klasses.splice(index, 1);
        $scope.arrayIndexKlass = $scope.findArrayIndexKlass($scope.klasses, tempLevel, tempParentID);

        $scope.arrayIndexStudent = $scope.findArrayIndexStudent($scope.students, $scope.klasses, tempLevel, tempParentID);

        var arrayReverse = _.chain($scope.arrayIndexStudent).reverse().value();

        for (var i = 1; i < $scope.arrayIndexKlass.length; i++) {
            $scope.arrayIndexKlass[i] = $scope.arrayIndexKlass[i] - i;
        }

        for (var i = 0; i < $scope.arrayIndexKlass.length; i++) {
            $scope.klasses.splice($scope.arrayIndexKlass[i], 1);
        }
        
        for (var i = 1; i < arrayReverse.length; i++) {
            arrayReverse[i] = arrayReverse[i] - i;
        }
        
        for (var i = 0; i < arrayReverse.length; i++) {
            $scope.students.splice(arrayReverse[i], 1);
        }
    }
}