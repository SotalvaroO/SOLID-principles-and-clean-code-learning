(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, markedToDelete: false },
        { id: 2, markedToDelete: false },
        { id: 3, markedToDelete: true },
        { id: 4, markedToDelete: false },
        { id: 5, markedToDelete: false },
        { id: 7, markedToDelete: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.map( file => file.markedToDelete );

    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const todayDate = new Date();
    
    // días transcurridos - elapsed time in days
    const elapsedTimeInDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const numberOfFilesInDirectory = 33;
    
    // primer nombre - first name
    const firstName = 'Fernando';
    
    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceLastUpdate = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassesPerStudent = 6;


})();

