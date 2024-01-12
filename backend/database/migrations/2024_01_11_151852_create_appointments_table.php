<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('patient_id');
            $table->foreign('patient_id')
                ->references('id') 
                ->on('patients')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->date("date");
            $table->unsignedBigInteger('time_id');
            $table->foreign('time_id')
                ->references('id') 
                ->on('times')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')
                ->references('id') 
                ->on('users')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->unsignedBigInteger('service_id');
            $table->foreign('service_id')
                ->references('id') 
                ->on('services')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->longText("message");
            $table->string("appointment_type");
            $table->boolean("confirmation");
            $table->boolean("done");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};
