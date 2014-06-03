function controladorTareas($scope) {
    $scope.tareas = [{
            texto: 'Nico',
            hecho: true
        },
        {
            texto: 'Fede',
            hecho: false
        }
                    ];

    $scope.agregarTarea = function () {
        if ($scope.textoNuevaTarea !== '') {
            $scope.tareas.push({
                texto: $scope.textoNuevaTarea,
                hecho: false
            });

            $scope.textoNuevaTarea = '';
        }
    };

    $scope.restantes = function () {
        var cuenta = 0;
        angular.forEach($scope.tareas, function (tarea) {
            cuenta += tarea.hecho ? 0 : 1;
        });
        return cuenta;
    };

    $scope.eliminar = function () {
        var tareasViejas = $scope.tareas;
        $scope.tareas = [];

        angular.forEach(tareasViejas, function (tarea) {
            if (!tarea.hecho) {
                $scope.tareas.push(tarea);
            }
        });
    };
}