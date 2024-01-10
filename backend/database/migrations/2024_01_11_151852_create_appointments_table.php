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
            $table->string("name");
            $table->string("email");
            $table->string("phone",15);
            // $table->unsignedBigInteger('date_id');
            // $table->foreign('date_id')
            //     ->references('id') 
            //     ->on('dates')
            //     ->onUpdate('cascade')
            //     ->onDelete('cascade');
            $table->unsignedBigInteger('time_id');
            $table->foreign('time_id')
                ->references('id') 
                ->on('times')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->unsignedBigInteger('therapist_id');
            $table->foreign('therapist_id')
                ->references('id') 
                ->on('therapists')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->unsignedBigInteger('service_id');
            $table->foreign('service_id')
                ->references('id') 
                ->on('services')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->longText("message");
            $table->boolean("appointment_type");
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
